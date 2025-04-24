const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function addContact(req, res) {
  const { contactId } = req.body;

  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to add contacts",
      auth: req.authorization,
    });
    return;
  }

  if (typeof contactId === "undefined") {
    res.status(403).json({
      error: "Error on getting contact ID, try again",
      auth: req.authorization,
    });
    return;
  }

  try {
    await prisma.contacts.create({
      data: {
        userId: req.user.id,
        contactId: contactId,
      },
    });

    res.json({
      message: "Contact added successfully",
      auth: req.authorization,
    });
  } catch (error) {
    res.status(501).json({
      error: "Internal server error, try again",
      auth: req.authorization,
    });
  }
}

module.exports = addContact;
