const express = require("express");
const app = express();
const axios = require('axios');
const isLogged = false;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

require("dotenv/config");


//Import routes
const postRoute = require("./routes/posts");
const donationRoute = require("./routes/donations");
const userRoute = require("./routes/users");
app.use("/posts",postRoute);
app.use("/donations",donationRoute);
app.use("/users",userRoute);
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
app.get('/register',(req,res)=>{
    res.sendFile("register.html", { root: './home' })
})

app.use(express.urlencoded());

/** Process POST request */
app.post('/', function (req, res, next) {
  res.send(JSON.stringify(req.body));
  axios
  .post('http://localhost:3000/users', {
    name: "Luca Pedersoli",
    password:"test",
    mail:"ttt"
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
});