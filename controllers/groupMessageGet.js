const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function groupMessageGet(req, res) {
  if (req.authorization) {
    const { groupId } = req.body;

    try {
      if (typeof groupId === "undefined") {
        res.status(403).json({
          message: "Error in fetching messages, try again",
          auth: req.authorization,
        });
        return;
      }

      const data = await prisma.group.findFirst({
        where: {
          id: groupId,
        },
        include: {
          Messages: true,
        },
      });

      const membersData = await prisma.groupMembers.findMany({
        where: {
          groupId: groupId,
        },
        include: {
          user: true,
        },
      });

      const members = membersData.map((m) => {
        const data = {
          username: m.user.username,
          profile: m.user.profile,
          bio: m.user.bio,
        };
        return data;
      });

      res.json({
        message: "Messages fetched",
        data: data,
        members: members,
        auth: req.authorization,
      });
    } catch (err) {
      res
        .status(501)
        .json({ message: "server error", error: err, auth: req.authorization });
    }
  } else {
    res.status(403).json({
      error: "Unauthorized entry, login to send message",
      auth: req.authorization,
    });
  }
}

module.exports = groupMessageGet;
