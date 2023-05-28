const express = require("express");
const router = express.Router();

const { createComment } = require("../controller/CommentController");
// const { dummyController } = require("../controller/LikeController");
const { createPost, getAllPosts } = require("../controller/PostController");
const { likePost } = require("../controller/LikeController");

// router.get("/dummyRoutes", dummyController);
router.post("/comments/create", createComment );
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
// router.post("/posts", postController);

module.exports = router;