const validateData = require("../configs/validateData");
const verifyHash = require("../configs/passHash").verifyHash;

function login(req, res) {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const error = validateData(data);
    if (error) {
      throw error;
    }
    const salt =
      "035aa868deaaf255f660470c32ed5f5848c509c8fda461a45c712474b98b7fac";
    const hash =
      "3606684a4afa31a0d1da4dff9dda0983911b6e7c16fff296d2c00c346981028de6236c77e60a05164fa9f24fe355f5fe7ae7cc86a295194d240cdba985441";
    const verify = verifyHash(data.username, data.password, salt, hash);
    console.log(verify);

    res.json({ message: `Logged in Successfully` });
  } catch (err) {
    if (err.errors) {
      res.status(401).json({ message: "error", error: err.errors[0] });
    }
  }
}

module.exports = login;
