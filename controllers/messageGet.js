const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function messageGet(req, res) {
  if (req.authorization) {
    const { receiverId } = req.body;

    try {
      const data = await prisma.messages.findMany({
        where: {
          OR: [
            {
              AND: [{ senderId: req.user.id }, { receiverId: receiverId }],
            },
            {
              AND: [{ senderId: receiverId }, { receiverId: req.user.id }],
            },
          ],
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

module.exports = messageGet;
