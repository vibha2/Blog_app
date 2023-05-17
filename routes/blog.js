const express = require("express");
const router = express.Router();

const { createComment } = require("../controller/CommentController");
const { dummyController } = require("../controller/LikeController");
const { createPost } = require("../controller/PostController");

router.get("/dummyRoutes", dummyController);
router.post("/comments/create", createComment );
router.post("/posts/create", createPost);
// router.post("/posts", postController);

module.exports = router;