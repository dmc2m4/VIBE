const { Router } = require("express");
const paginationRouter = Router();
const { getPagination } = require("../Controllers/PaginationController");

paginationRouter.post("/", async (req, res) => {
  const { page, info } = req.body;
  try {
    const response = await getPagination(page, info);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error.message });
  }
});

module.exports = paginationRouter;
