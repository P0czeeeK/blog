const Post = require("../models/Post"); 

exports.createPost = async (req, res) => { 
 try { 
    const { title, content, tags } = req.body; 
    const post = await Post.create({ title, content, tags, author: req.user.id }); 
    res.status(201).json(post); 
} catch (error) { 
    res.status(400).json({ error: "Błąd tworzenia posta" });
 } 
}; 

exports.getPosts = async (req, res) => { 
    const posts = await Post.find().populate("author", "username"); 
    res.json(posts); 
};