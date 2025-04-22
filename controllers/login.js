const { ZodError } = require("zod");
const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();
const validateData = require("../configs/validateData");
const verifyHash = require("../configs/passHash").verifyHash;
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(req, res) {
  if (!req.authorization) {
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
        res.status(401).json("Username does not exists");
        return;
      }

      const salt = userData.salt;
      const hash = userData.hash;

      const verify = verifyHash(data.username, data.password, salt, hash);

      if (!verify) {
        res.status(401).json("password is not matching");
        return;
      }

      const tokenData = {
        id: userData.id,
        username: userData.username,
      };
      const secret = process.env.ACCESS_TOKEN_SECRET;

      jwt.sign(
        { user: tokenData },
        secret,
        { expiresIn: "10m" },
        (err, token) => {
          if (err) {
            res.status(501).json({
              error: "Internal server error, try again",
              auth: req.authorization,
            });
          }

          res.json({
            message: `Logged in Successfully`,
            auth: req.authorization,
            token: token,
          });
        }
      );
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(401).json({ error: err.errors[0], auth: req.authorization });
      } else {
        res.status(401).json({ error: err.message, auth: req.authorization });
      }
    }
  } else {
    res.json({ message: "Already logged in", auth: req.authorization });
  }
}

module.exports = login;
