const { ZodError } = require("zod");
const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();
const validateData = require("../configs/validateData");
const getHash = require("../configs/passHash").getHash;

async function signup(req, res) {
  if (req.authorization) {
    res.status(401).json({
      message: "Already logged in",
      auth: req.authorization,
    });
    return;
  }

  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const checkUsername = await prisma.users.findFirst({
      where: {
        username: data.username,
      },
    });

    if (checkUsername) {
      res.status(401).json({ error: "username already exists" });
      return;
    }

    const error = validateData(data);

    if (error) {
      throw error;
    }

    const { salt, hash } = getHash(data.username, data.password);

    const userData = await prisma.users.create({
      data: {
        username: data.username,
        salt: salt,
        hash: hash,
      },
    });

    res.json({ message: `Successfully Registered`, auth: req.authorization });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(401).json({ message: "error", error: err.errors[0] });
    }
  }
}

module.exports = signup;
