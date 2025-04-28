const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function getGroups(req, res) {
  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to add contacts",
      auth: req.authorization,
    });
    return;
  }

  try {
    const data = await prisma.group.findMany({});

    res.json({
      message: "Groups fetched successfully",
      data: data,
      auth: req.authorization,
    });
  } catch (error) {
    res.status(501).json({
      error: "Internal server error, try again",
      auth: req.authorization,
    });
  }
}

module.exports = getGroups;
