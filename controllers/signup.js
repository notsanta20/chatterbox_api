const validateData = require("../configs/validateData");
const getHash = require("../configs/passHash").getHash;

function signup(req, res) {
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
    console.log(salt, hash);

    res.json({ message: `Successfully Registered` });
  } catch (err) {
    if (err.errors) {
      res.status(401).json({ message: "error", error: err.errors[0] });
    }
  }
}

module.exports = signup;
