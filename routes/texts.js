const express = require("express");
const router = express.Router();
const Text = require("../models/Text");

//GET BACK ALL THE USERS
router.get('/', async (req, res) => {
    try {
        const texts = await Text.find();
        res.json(texts);
    } catch (err) {
        res.json({
            message: err
        });
    }
});
//SUBMIT A USER
router.post("/", async (req, res) => {
    const text = new Text({
        name: req.body.name,
        text: req.body.text,
        mail: req.body.mail
    });
    try {
        const savedText = await text.save();
        res.json(savedText);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;