const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function groupMessageGet(req, res) {
  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to get group messages",
      auth: req.authorization,
    });
    return;
  }

  const { receiverId } = req.params;

  try {
    if (typeof receiverId === "undefined") {
      res.status(403).json({
        message: "Error in fetching messages, try again",
        auth: req.authorization,
      });
      return;
    }

    const data = await prisma.messages.findMany({
      where: {
        groupId: receiverId,
      },
      include: {
        sender: true,
      },
    });

    const grp = await prisma.group.findFirst({
      where: {
        id: receiverId,
      },
    });

    const filteredData = data.map((data) => {
      return {
        ...data,
        sender: {
          username: data.sender.username,
        },
      };
    });

    const membersData = await prisma.groupMembers.findMany({
      where: {
        groupId: receiverId,
      },
      include: {
        user: true,
      },
    });

    const members = membersData.map((m) => {
      return {
        username: m.user.username,
        profile: m.user.profile,
        bio: m.user.bio,
      };
    });

    res.json({
      message: "Messages fetched",
      data: filteredData,
      members: members,
      auth: req.authorization,
      userId: req.user.id,
      profileName: grp.name,
    });
  } catch (error) {
    res
      .status(501)
      .json({ message: "server error", error: error, auth: req.authorization });
  }
}

module.exports = groupMessageGet;
