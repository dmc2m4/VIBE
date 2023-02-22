const { Router } = require("express");
const {
  postComment,
  putComment,
  destroyComment,
  getCommentById,
} = require("../Controllers/CommentController");
const commentRouter = Router();

commentRouter.post("/", async (req, res) => {
  const value = req.body

  try {
    const newcomment = await postComment(value);
    res.status(200).json(newcomment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.put("/", async (req, res) => {
  const value = req.body
  try {
    putComment(value);
    res.status(201).send("Question answered satisfactorily");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.post("/destroy", async (req, res) => {
  const { id } = req.body;
  try {
    await destroyComment(id);
    res.status(200).send("Deleted comment successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.get("/:id", async (req, res) => {  //preguntar quien la hizo
  const {id} = req.params
  try {
    const comment = await getCommentById(id);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = commentRouter;
