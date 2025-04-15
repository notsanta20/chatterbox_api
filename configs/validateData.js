const { z } = require("zod");

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be at least 3 characters" })
    .max(15, { message: "username should not be more than 15 characters" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" })
    .max(30, { message: "password should not be more than 30 characters" }),
});

function validateData(data) {
  try {
    schema.parse(data);
    return;
  } catch (err) {
    return err;
  }
}

module.exports = validateData;
