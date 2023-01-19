const { Router } = require("express");
const MPP = require('./../Middlewares/PostProductMiddleware')
const { getAllProduct, postProduct } = require("../Controllers/ProductController");

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProduct = await getAllProduct();
    res.status(200).send(allProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.post("/sell", MPP, async (req, res) => {
  try {
    const newProduct = await postProduct(req.body);
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = productRouter;
