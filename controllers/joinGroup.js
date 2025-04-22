const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function joinGroup(req, res) {
  const { groupId } = req.body;

  if (req.authorization) {
    try {
      if (typeof groupId === "undefined") {
        res.status(401).json({
          error: "Group Id must not be empty",
          auth: req.authorization,
        });
        return;
      }

      const data = await prisma.groupMembers.create({
        data: {
          groupId: groupId,
          userId: req.user.id,
        },
      });
      console.log(data);

      res.json({
        message: "Joined group successfully",
        auth: req.authorization,
      });
    } catch (error) {
      res
        .status(501)
        .json({ error: "Internal server error", auth: req.authorization });
    }
  } else {
    res.status(401).json({
      error: "Unauthorized entry, login to join group",
      auth: req.authorization,
    });
  }
}

module.exports = joinGroup;
