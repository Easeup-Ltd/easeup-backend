const jwt = require("jsonwebtoken");
const config = require("../config/config");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret);
};
const validateAuthToken = async (token) => {
  const user = await jwt.verify(token, config.jwtSecret);
  return user;
};
const verifyJWT = async (req, res, next) => {
  let token = req.headers["authorization"];
  if (token && typeof token === "string") {
    try {
      const authenticationScheme = "Bearer ";
      if (token.startsWith(authenticationScheme)) {
        token = token.slice(authenticationScheme.length, token.length);
      }
      const user = await validateAuthToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(403).json({ error: error });
    }
  }
};

module.exports = { generateToken, verifyJWT };