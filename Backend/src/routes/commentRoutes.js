const express = require("express"); 
const { createComment, getCommentByPostId } = require("../controller/commentController"); 
const authMiddleware = require("../middleware/authMiddleware"); 
const router = express.Router();
 
router.post("/:postId", authMiddleware, createComment);
 
router.get("/:postId", authMiddleware, getCommentByPostId); 

module.exports = router;