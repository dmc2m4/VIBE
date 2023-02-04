const { Router } = require("express");
const { postComment, putComment } = require("../Controllers/CommentController");
const commentRouter = Router();

commentRouter.post("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const newcomment = await postComment(id, req.body);
    res.status(200).send(newcomment);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

commentRouter.put("/updateComment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    putComment(id, req.body);
    res.status(201).send("Question answered satisfactorily");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = commentRouter;
