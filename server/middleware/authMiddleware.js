const jwt = require("jsonwebtoken");

exports.Protect = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "not authenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      res.status(401).json({ msg: "No longer exists" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token invalid or expired" });
  }
};
