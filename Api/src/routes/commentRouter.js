const { Router } = require("express");
const { postComment, putComment, deleteComment, getCommentById } = require("../Controllers/CommentController");
const commentRouter = Router();
const {Comment} = require('../db')

commentRouter.post("/", async (req, res) => {
  try {
    const newcomment = await postComment(req.body);
    res.status(200).send(newcomment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.put("/", async (req, res) => {
  try {
    putComment(req.body);
    res.status(201).send("Question answered satisfactorily");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.delete("/:id"), async (req, res) => {
  const { id } = req.params;
  // const comment =  await Comment.findByPk(id)
  // console.log(comment);
  try {
    await deleteComment(id);
    res.status(200).send("Deleted comment successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

commentRouter.get("/:id", async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = commentRouter;
