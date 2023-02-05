const { Router } = require("express");
const {
  getAllProduct,
  postProduct,
  deleteProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");
/* const {
  deleteComment,
  putComment,
} = require("../Controllers/CommentController"); */
/* const = {
  deleteReviews,
  putReviews
} = require("../Controllers/AddressController") */
// const MPP = require("../Middlewares/PostProductMiddleware")
// const { Product } = require("../db")
// const multer = require("multer");
// const cloudinary = require("cloudinary");

const productRouter = Router();

productRouter.post("/", async (req, res) => {
  try {
    const newProduct = await postProduct(req.body);
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

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
    /* deleteComment(id); //ver
    deleteReviews(id) */
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.put("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    putProduct(id, req.body);
/*     putComment(id);
 */    
    res.status(201).send("Product updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = productRouter;
