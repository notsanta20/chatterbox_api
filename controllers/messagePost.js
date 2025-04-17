const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function messagePost(req, res) {
  if (req.authorization) {
    const { message, receiverId } = req.body;

    try {
      const data = await prisma.messages.create({
        data: {
          message: message,
          senderId: req.user.id,
          receiverId: receiverId,
        },
      });
      console.log(data);
      res.json({ message: "Message sent" });
    } catch (err) {
      res.status(501).json({ message: "server error", error: err });
    }
  } else {
    res
      .status(403)
      .json({ error: "Unauthorized entry, login to send message" });
  }
}

module.exports = messagePost;
