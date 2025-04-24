const { PrismaClient } = require("../prisma/generated/prisma/client");
const prisma = new PrismaClient();

async function getContacts(req, res) {
  const { contactId } = req.body;

  if (!req.authorization) {
    res.status(401).json({
      error: "Unauthorized entry, login to see contacts",
      auth: req.authorization,
    });
    return;
  }

  try {
    const data = await prisma.contacts.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        contact: true,
      },
    });

    const filteredData = data.map((d) => {
      return {
        id: d.contactId,
        username: d.contact.username,
        profile: d.contact.profile,
        bio: d.contact.bio,
      };
    });

    res.json({
      message: "Contact fetched successfully",
      auth: req.authorization,
      data: filteredData,
    });
  } catch (error) {
    res.status(501).json({
      error: "Internal server error, try again",
      auth: req.authorization,
    });
  }
}

module.exports = getContacts;
