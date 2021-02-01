const helmet = require("helmet");
const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

app.use(helmet()); //never miss adding helmet to your server

app.use(express.static("public"));
// express.json and urlencoded are the two pieces of middlware that create 'req.body'
// these two middlwares are very important because they will:
// take any type of data, pass it for you and give it to you in json format which is what you probably are going to want
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  //   console.log(req);
  //   console.log(req.headers);
  console.log(req.body);
  res.send("test");
});

app.listen(3000);

// helmet - VERY IMPORTANT TOO
//It sets HTML headers right up front and protects you a whole bunch from well-known vulnerabilities
// npm install helmet
// require it
// use it
