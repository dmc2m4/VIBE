const { Router } = require("express");
const pagingRouter = Router();
const { getPaging } = require("../Controllers/PagingController");

pagingRouter.get("/", async (req, res) => {
  const { info, page } = req.body;
  try {
    const response = await getPaging(info, page);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = pagingRouter;
