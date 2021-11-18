const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

//Import routes

const postRoute = require("./routes/posts");

app.use("/posts",postRoute);

//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home!");
})

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connected to the DB");
})
//Start listening to the server
app.listen(3000);