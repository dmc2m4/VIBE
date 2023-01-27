const { Router } = require("express");
const MPP = require("../middlewares/PostProductMiddleware");
const {
  getAllProduct,
  postProduct,
  deleteProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");
const { uploadImage } = require("../utils/cloudinary")

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

productRouter.post("/", MPP, async (req, res) => {
  console.log(req.body)
  try {
    const newProduct = await postProduct(req.body);
    console.log(req.files)
    if(req.body.image){
      const result = await uploadImage(req.body.image)
      // req.files.image.tempFilePat
      console.log(result)}
    res.status(201).json(newProduct);
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

module.exports = productRouter;
