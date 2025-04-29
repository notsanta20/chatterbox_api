const { z, ZodError } = require("zod");
const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

const schema = z.object({
  bio: z
    .string()
    .max(40, { message: "Bio should not be more than 40 characters" }),
});

function validateData(data) {
  try {
    schema.parse(data);
    return;
  } catch (err) {
    return err;
  }
}

async function editBio(req, res) {
  const { bio } = req.body;

  const error = validateData(bio);
  if (error) {
    throw error;
  }

  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to add contacts",
      auth: req.authorization,
    });
    return;
  }

  try {
    if (typeof bio === "undefined") {
      res.status(401).json({
        error: "Unable to get Bio, try again",
        auth: req.authorization,
      });
      return;
    }

    await prisma.users.update({
      where: {
        id: req.user.id,
      },
      data: {
        bio: bio,
      },
    });

    res.json({ message: "Bio updated successfully", auth: req.authorization });
  } catch (error) {
    if (err instanceof ZodError) {
      res.status(401).json({ error: err.errors[0], auth: req.authorization });
    } else {
      res.status(401).json({ error: err.message, auth: req.authorization });
    }
  }
}

module.exports = editBio;
