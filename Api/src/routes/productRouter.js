const { Router } = require("express");
const { payProduct } = require("../Controllers/MercadoPagoController");
const {
  getAllProduct,
  postProduct,
  destroyProduct,
  restoreProduct,
  putProduct,
  getProductById,
} = require("../Controllers/ProductController");

const { postReview, destroyReview } = require("../Controllers/ReviewController");

const productRouter = Router();

productRouter.post("/reviews", async (req, res) => {
  try {
    const newRev = await postReview(req.body);
    res.status(200).send(newRev);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.post("/reviews/destroy", async (req, res) => {
  const { id } = req.body;
  try {
    await destroyReview(id);
    res.status(200).send("Deleted review successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

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
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.post("/destroy", async (req, res) => {
  const { id } = req.body;
  try {
    destroyProduct(id);
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.post("/restore", async (req, res) => {
  const { id } = req.body;
  try {
    restoreProduct(id);
    res.status(201).send("Product updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.put("/", async (req, res) => {
  try {
    putProduct(req.body);
    res.status(201).send("Product updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

productRouter.post("/pay",async (req, res) => {
  console.log(req.body);
  try {
    const result = await payProduct( req.body, res);
    res.status(200).send(result)
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message); 
  }
})

module.exports = productRouter;
