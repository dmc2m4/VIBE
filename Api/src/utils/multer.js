
const path = require("path");
const uuid = require('uuid-v4')
const multer = require("multer");

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 4000000 }, 
  fileFilter: (req, file, cb) => { 
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
     const extname = filetypes.test(path.extname(file.originalname));
     if (mimetype && extname) {
      return cb(null, true);
    }
    cb("error: el archivo debe ser una imagen valida");
  },
  
})

module.exports = upload
