const crypto = require("crypto");

function getHash(username, password) {
  const userinfo = `${username}:${password}`;
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(userinfo, salt, 1000, 64, "sha512")
    .toString("hex");
  return {
    salt,
    hash,
  };
}

function verifyHash(username, password, salt, hash) {
  const userinfo = `${username}:${password}`;

  const verifyHash = crypto
    .pbkdf2Sync(userinfo, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
}

module.exports = {
  getHash,
  verifyHash,
};
