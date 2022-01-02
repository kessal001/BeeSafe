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
const donationRoute = require("./routes/donations");
const textRoute = require("./routes/texts");
app.use("/donations",donationRoute);
app.use("/texts",textRoute);
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
  console.log(JSON.stringify(req.body.name));
  axios
  .post('http://localhost:3000/texts', {
    name: JSON.stringify(req.body.name),
    text: JSON.stringify(req.body.text),
    mail: JSON.stringify(req.body.mail)
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
});



//todo Implement donation counter
//todo Implement donation page
//todo improve project structure