const user = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

function signToken(user) {
  return jwt.sign(
    { id: user._id, role: user.role, name: user.name },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}
//user auth controller
exports.register = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const isExists = await user.findOne({ email });
    if (isExists) {
      return res.status(400).json({ msg: "User already exists !" });
    }

    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(password, salt);

    const userData = await user.create({
      name,
      password: hashed,
      email,
      role,
      phone,
    });

   
    return res.status(200).json({ msg: "Successfully registered !", userData });
  } catch (error) {
    return res.status(500).json({ msg: error.meassage });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const match = await user.findOne({ email });
    if (!match) {
      return res.status(404).json({ msg: "Invalid Email or Password !" });
    }
    let ok =await bcrypt.compare(password, match.password);
    if (!ok) {
      return res.status(404).json({ msg: "Invalid Email or Password !" });
    }

    if (match && ok) {
      const token = signToken(match);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });


      return res.status(200).json({ msg: "Login Successfully" });
    
    }
  } catch (error) {
    return res.status(500).json({ msg: `error :${error.message}` });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ msg: "Logged out" });
};

exports.recruitregister = async (req, res) => {
  const { name, companyName, email, password, phone, role } = req.body;
  if (!name || !companyName || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    const isExists = await user.findOne({ email });
    if (isExists) {
      return res.status(400).json({ msg: "User already exists !" });
    }

    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(password, salt);

    const recruiter = await user.create({
      name,
      companyName,
      email,
      password: hashed,
      isApproved: false,
      role,
      phone,
    });

    return res.status(200).json({ msg: "Successfully registered !" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.googleLogin = async (req, res) => {
  const reDirectUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    `client_id=${process.env.GOOGLE_CLIENT_ID}` +
    `&redirect_uri=http://localhost:5173/google/callback` +
    `&response_type=code` +
    `&scope=email profile`;
  res.json({url:reDirectUrl});
};

exports.googleCallback = async (req, res) => {
  const code = req.body.code;
  
  try {
    const resToken = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:5173/google/callback",
    });
  const {id_token} = resToken.data;

    const decoded = jwt.decode(id_token);
    
    

    const exists = await user.findOne({ email: decoded.email });

    
    if (exists==null) {
      exists = await user.create({
        name: decoded.name,
        email: decoded.email,
        googleId: decoded.sub,
        role: "seeker",
      });
    }
    
    const token = signToken(exists);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });


    
    return res.status(200).json({ msg: "login successfully!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};



