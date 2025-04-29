const express = require("express"); 
const { createPost, getPosts } = require("../controller/postController"); 
const authMiddleware = require("../middleware/authMiddleware"); 
const router = express.Router(); 

router.post("/", authMiddleware, createPost); 
router.get("/", authMiddleware, getPosts); 

module.exports = router;