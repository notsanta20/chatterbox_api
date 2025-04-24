const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function getAllUsers(req, res) {
  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to see all users",
      auth: req.authorization,
    });
    return;
  }

  try {
    const data = await prisma.users.findMany({});

    const filteredData = data.map((d) => {
      return {
        id: d.id,
        username: d.username,
        profile: d.profile,
      };
    });

    res.json({
      message: "All users list",
      auth: req.authorization,
      data: filteredData,
    });
  } catch (error) {
    res.status(501).json({
      error: "Internal server error, try again",
      auth: req.authorization,
    });
  }
}

module.exports = getAllUsers;
