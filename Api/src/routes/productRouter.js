const { Router } = require("express");
const {
  getAllProduct,
  postProduct,
  deleteProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");

const {
  postReview
} = require("../Controllers/ReviewController")

// const MPP = require("../Middlewares/PostProductMiddleware")
// const { Product } = require("../db")
// const multer = require("multer");
// const cloudinary = require("cloudinary");

const productRouter = Router();

productRouter.post("/reviews", async (req, res)=>{
  try{
    const newRev = await postReview(req.body);
    res.status(200).send(newRev)
  }catch(error){
    res.status(400).send(error.message);
  }
})

productRouter.post("/", async (req, res)=>{
  try{
    const newProduct = await postProduct(req.body)
    res.status(200).send(newProduct)
  }catch(error){
    res.status(400).send(error.message);
  }
})

productRouter.get("/", async (req, res) => {
  try {
    const allProduct = await getAllProduct();
    res.status(200).send(allProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.get("/:id", async (req, res) => {
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

//----------------ruta-----------------------
module.exports = productRouter;
