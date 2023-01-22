const { Router } = require("express");
const paginationRouter = Router();
const { getPagination } = require("../controllers/PaginationController");

paginationRouter.post("/", async (req, res) => {
  const { page, info } = req.body;
  try {
    const response = await getPagination(page, info);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = paginationRouter;
