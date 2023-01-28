//ruta post
const { Product } = require("./db");
const productRouter = require("./routes/productRouter");
const multer = require("multer");
const cloudinary = require("cloudinary");

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
const upload = multer({ storage: storage, fileFilter: imageFilter });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//ruta
productRouter.post("/", upload.single("img"), async (req, res) => {
  const {
    name,
    img,
    size,
    color,
    category,
    gender,
    cost,
    season,
    stock,
    amount,
  } = req.body;
  console.log(req.body)
  try {
    cloudinary.uploader.upload(req.file.path, async function (result) {
      const newProduct = await Product.create({
        name: name,
        img: result.secure_url,
        size: size,
        color: color,
        category: category,
        gender: gender,
        cost: cost,
        season: season,
        stock: stock,
        amount: amount,
      });
      Product.save();
      res.status(200).send(newProduct);
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
