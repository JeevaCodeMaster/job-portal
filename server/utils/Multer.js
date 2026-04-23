const multer = require("multer");
const path = require("path");


  //  Storage Configuration

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, "uploads/profiles");
    } else if (file.fieldname === "resume") {
      cb(null, "uploads/resumes");
    } else if (file.fieldname === "logo") {
      cb(null, "uploads/company-logos");
    }
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      uniqueName + path.extname(file.originalname)
    );
  },
});


  //  File Filter

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "profileImage" || file.fieldname === "logo") {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed"), false);
    }
  }

  if (file.fieldname === "resume") {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF or DOC files allowed"), false);
    }
  }
};

// Multer Upload

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
