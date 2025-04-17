const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function groupMessagePost(req, res) {
  if (req.authorization) {
    let { message, imageURL, groupId } = req.body;

    if (typeof message === "undefined") {
      message = null;
    }
    if (typeof imageURL === "undefined") {
      imageURL = null;
    }

    try {
      const data = await prisma.messages.create({
        data: {
          message: message,
          imageURL: imageURL,
          senderId: req.user.id,
          groupId: groupId,
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

module.exports = groupMessagePost;
