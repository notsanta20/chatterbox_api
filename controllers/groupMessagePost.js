const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function groupMessagePost(req, res) {
  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to send group messages",
      auth: req.authorization,
    });
    return;
  }

  let { message, imageURL, groupId } = req.body;

  if (typeof message === "undefined") {
    message = null;
  }
  if (typeof imageURL === "undefined") {
    imageURL = null;
  }

  try {
    if (typeof groupId === "undefined") {
      res.status(403).json({
        message: "Group does not exists, try again",
        auth: req.authorization,
      });
      return;
    }
    const data = await prisma.messages.create({
      data: {
        message: message,
        imageURL: imageURL,
        senderId: req.user.id,
        groupId: groupId,
      },
    });
    console.log(data);
    res.json({ message: "Message sent", auth: req.authorization });
  } catch (err) {
    res
      .status(501)
      .json({ message: "server error", error: err, auth: req.authorization });
  }
}

module.exports = groupMessagePost;
