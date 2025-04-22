const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function messagePost(req, res) {
  if (req.authorization) {
    let { message, imageURL, receiverId } = req.body;

    if (typeof message === "undefined") {
      message = null;
    }
    if (typeof imageURL === "undefined") {
      imageURL = null;
    }

    try {
      if (typeof receiverId === "undefined") {
        res
          .status(403)
          .json({
            message: "Receiver contact error, try again",
            auth: req.authorization,
          });
        return;
      }

      const data = await prisma.messages.create({
        data: {
          message: message,
          imageURL: imageURL,
          senderId: req.user.id,
          receiverId: receiverId,
        },
      });
      console.log(data);
      res.json({ message: "Message sent", auth: req.authorization });
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

module.exports = messagePost;
