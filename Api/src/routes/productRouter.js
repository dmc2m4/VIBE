const { Router } = require("express");
const {
  getAllProduct,
/*   postProduct,
 */  deleteProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");

const { Product } = require("../db")
const multer = require("multer");
const cloudinary = require("cloudinary");





const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProduct = await getAllProduct();
    res.status(200).send(allProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.get("/:id", async (req, res) => {
  console.log(req.body)
  try {
    const {id} = req.params;
    const product = await getProductById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


productRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    deleteProduct(id);
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.put("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    putProduct(id, req.body);
    res.status(201).send("Product updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//ruta post

//------------ middleware--------------------
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});
const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return cb(new Error("Only image files are allowed"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
//--------------middleware-----------------
//---------------ruta----------------------
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
  console.log(req.file.path + "soy path-----------------------------")
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
      res.status(200).send(newProduct);
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
//----------------ruta-----------------------
module.exports = productRouter;
