const { Router } = require("express");
const { postComment, putComment, deleteComment } = require("../Controllers/CommentController");
const commentRouter = Router();

commentRouter.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newcomment = await postComment(id, req.body);
    res.status(200).send(newcomment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.put("/updateComment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    putComment(id, req.body);
    res.status(201).send("Question answered satisfactorily");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.delete("/delete/:id"), async (req, res) => {
  const { id } = req.params;
  try {
    deleteComment(id);
    res.status(200).send("Deleted comment successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = commentRouter;
