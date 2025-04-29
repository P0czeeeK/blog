const Comment = require("../models/Comment"); 
const Post = require("../models/Post");

exports.createComment = async (req, res) =>{ 
 try{ 
    const { content } = req.body; 
    const { postId } = req.params; 
    const post = await Post.findById(postId); 
    if (!post) { 
        return res.status(404).json({ error: "Post nie istnieje" }); 
    } 
    const comment = await Comment.create({ content, author: req.user.id, post: postId }); 
    res.status(201).json(comment); 
 } catch (error) { 
    res.status(400).json({ error: "Błąd tworzenia komentarza" }); 
 } 
}; 

exports.getCommentByPostId = async (req, res) => { 
 try { 
    const { postId } = req.params; 
    const post = await Post.findById(postId); 
    const comments = await Comment.find({ post: postId }).populate("author", "username email").exec(); 
    res.json({ post, comments }); 
 } catch (error) { 
    res.status(500).json({ error: "Błąd serwera" }) 
 } 
};