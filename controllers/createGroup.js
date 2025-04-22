const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function createGroup(req, res) {
  if (req.authorization) {
    let { groupName, profile } = req.body;
    if (typeof profile === "undefined") {
      profile = null;
    }
    try {
      if (typeof groupName === "undefined") {
        res
          .status(401)
          .json({
            error: "Group name must not be empty",
            auth: req.authorization,
          });
        return;
      }

      const data = await prisma.group.create({
        data: {
          name: groupName,
          profile: profile,
        },
      });
      console.log(data);

      res.json({
        message: "group created successfully",
        auth: req.authorization,
      });
    } catch (error) {
      res
        .status(501)
        .json({ error: "Internal server error", auth: req.authorization });
    }
  } else {
    res
      .status(401)
      .json({
        error: "Unauthorized entry, login to create group",
        auth: req.authorization,
      });
  }
}

module.exports = createGroup;
