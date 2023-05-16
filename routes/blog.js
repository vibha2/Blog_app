const express = require("express");
const router = express.Router();

const { dummyController } = require("../controller/LikeController");

router.get("/dummyRoutes", dummyController);
// router.post("/posts", postController);

module.exports = router;