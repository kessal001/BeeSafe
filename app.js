const express = require("express");

const app = express();

//ROUTES
app.get('/',(req,res)=>{
    res.send("We are on home!");
})

//Start listening to the server
app.listen(2001);