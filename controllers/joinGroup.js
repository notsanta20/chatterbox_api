const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function joinGroup(req, res) {
  const { groupId } = req.body;

  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to join group",
      auth: req.authorization,
    });
    return;
  }

  try {
    if (typeof groupId === "undefined") {
      res.status(401).json({
        error: "Group Id must not be empty",
        auth: req.authorization,
      });
      return;
    }

    const verifyData = await prisma.contacts.findFirst({
      where: {
        userId: req.user.id,
        groupId: groupId,
      },
    });

    if (verifyData) {
      res.status(403).json({
        error: "Group already added",
        auth: req.authorization,
      });
      return;
    }

    await prisma.groupMembers.create({
      data: {
        groupId: groupId,
        userId: req.user.id,
      },
    });

    await prisma.contacts.create({
      data: {
        userId: req.user.id,
        groupId: groupId,
      },
    });

    res.json({
      message: "Joined group successfully",
      auth: req.authorization,
    });
  } catch (error) {
    res
      .status(501)
      .json({ error: "Internal server error", auth: req.authorization });
  }
}

module.exports = joinGroup;
