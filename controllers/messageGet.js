const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function messageGet(req, res) {
  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to get messages",
      auth: req.authorization,
    });
    return;
  }

  const { receiverId } = req.body;

  try {
    if (typeof receiverId === "undefined") {
      res.status(401).json({
        error: "Receiver contact error, try again",
        auth: req.authorization,
      });
      return;
    }

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
    res.json({
      message: "Messages fetched",
      data: data,
      auth: req.authorization,
    });
  } catch (err) {
    res
      .status(501)
      .json({ message: "server error", error: err, auth: req.authorization });
  }
}

module.exports = messageGet;
