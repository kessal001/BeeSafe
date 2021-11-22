const express = require("express");
const router = express.Router();
const Post = require("../models/Donation");

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
//SUBMIT A POST
router.post("/", async (req, res) => {
    const post = new Post({
        name: req.body.name,
        amount: req.body.amount
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;