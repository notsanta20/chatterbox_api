const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function groupMessageGet(req, res) {
  if (req.authorization) {
    const { groupId } = req.body;

    try {
      const data = await prisma.messages.findMany({
        where: {
          groupId: groupId,
        },
      });

      res.json({ message: "Message sent", data: data });
    } catch (err) {
      res.status(501).json({ message: "server error", error: err });
    }
  } else {
    res
      .status(403)
      .json({ error: "Unauthorized entry, login to send message" });
  }
}

module.exports = groupMessageGet;
