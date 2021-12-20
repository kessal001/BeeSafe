const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

require("dotenv/config");


//Import routes
const postRoute = require("./routes/posts");
const donationRoute = require("./routes/donations");
app.use("/posts",postRoute);
app.use("/donations",donationRoute);
app.use(express.static("./home"));
//ROUTES
app.get('/',(req,res)=>{
    res.sendFile("./index.html");
})

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connected to the DB");
})
//Start listening to the server
app.listen(3000);
app.get('/login',(req,res)=>{
    res.sendFile("login.html", { root: './home' })
})

app.use(express.urlencoded());

/** Process POST request */
app.post('/', function (req, res, next) {
  res.send(JSON.stringify(req.body));
});