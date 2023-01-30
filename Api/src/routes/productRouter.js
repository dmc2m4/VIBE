const { Router } = require("express");
const {
  getAllProduct,
  /*   postProduct,
   */ deleteProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const { Product } = require("../db");

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
  console.log(req.body);
  try {
    const { id } = req.params;
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
/* 
productRouter.post("/", async (req, res) => {
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
<<<<<<< HEAD
=======

>>>>>>> 2142cd27290f177055f502a838bc6f2730421262
  try {
    let imgUrlArray = [];
    for (let i = 0; i < req.files?.length; i++) {
        const cloudinary_image = await cloudinary.uploader.upload(req.files[i].path, {
            folder: 'imagesVibes'
        });
        imgUrlArray.push(cloudinary_image.secure_url)
    };
    const newProduct = await Product.create({
      name: name,
      img: imgUrlArray,
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
    ;
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}); */

// Ruta para subir múltiples archivos a Cloudinary

productRouter.post("/", upload.array("img", 5), async (req, res) => {
  const {
    name,
    size,
    color,
    category,
    gender,
    cost,
    season,
    stock,
    amount,
    img
  } = req.body;
  try {
    console.log(req.file + "soy req.file")
    console.log(img + "soy IMG")
    const results = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.v2.uploader.upload(file.path);
        return result;
      })
    );
    const filtered = results.map((x) => {
      return x.secure_url;
    });

    const newProduct = await Product.create({
      name: name,
      img: filtered,
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
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = productRouter;
