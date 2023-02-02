const multer = require("multer");
const cloudinary = require("cloudinary");

const MPP = function (req, res, next) {
  const { name, img, size, color, category, gender, cost, season, stock } =
    req.body;
  console.log(img);
  if (!name) throw new Error("Missing name");
  if (!img) throw new Error("Missing images");
  if (!size) throw new Error("Missing size");
  if (!color) throw new Error("Missing color");
  if (!category) throw new Error("Missing category");
  if (!gender) throw new Error("Missing gender");
  if (!cost) throw new Error("Missing cost");
  if (!season) throw new Error("Missing season");
  if (!stock) throw new Error("Missing stock");
  
  next();
}; 


module.exports = {MPP};
