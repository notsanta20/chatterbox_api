const { ZodError } = require("zod");
const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();
const validateData = require("../configs/validateData");
const getHash = require("../configs/passHash").getHash;

async function signup(req, res) {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
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
    console.log(userData);

    res.json({ message: `Successfully Registered` });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(401).json({ message: "error", error: err.errors[0] });
    }
  }
}

module.exports = signup;
