const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.post("ajax", (req, res) => {
  console.log(req);
  res.send("test");
});

app.listen(3000);
