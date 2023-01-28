const multer = require("multer");
const cloudinary = require("cloudinary");

/* const MPP = function (req, res, next) {
  const { name, img, size, color, category, gender, cost, season, stock } =
    req.body;
  if (!name) throw new Error("Missing name");
  if (!img) throw new Error("Missing image");
  if (!size) throw new Error("Missing size");
  if (!color) throw new Error("Missing color");
  if (!category) throw new Error("Missing category");
  if (!gender) throw new Error("Missing gender");
  if (!cost) throw new Error("Missing cost");
  if (!season) throw new Error("Missing season");
  if (!stock) throw new Error("Missing stock");
  
  next();
}; */

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter }).single("img");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


module.exports = {upload};
