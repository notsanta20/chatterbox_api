const { ZodError } = require("zod");
const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();
const validateData = require("../configs/validateData");
const verifyHash = require("../configs/passHash").verifyHash;

async function login(req, res) {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const error = validateData(data);
    if (error) {
      throw error;
    }

    const userData = await prisma.users.findFirst({
      where: {
        username: data.username,
      },
    });

    if (!userData) {
      throw new Error("Username does not exists");
    }

    const salt = userData.salt;
    const hash = userData.hash;

    const verify = verifyHash(data.username, data.password, salt, hash);

    if (!verify) {
      throw new Error("password is not matching");
    }

    res.json({ message: `Logged in Successfully` });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(401).json({ error: err.errors[0] });
    } else {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = login;
