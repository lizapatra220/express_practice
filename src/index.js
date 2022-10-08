const express = require("express");
const path = require("path");
const app = express();
const staticpath = path.join(__dirname, "../public/");
//built in middleware
app.use(express.static(staticpath));
app.get("/", (req, res) => {
  res.send("hello i am liza patra");
});
app.get("/about", (req, res) => {
  res.send("hello its about page");
});
app.listen(1000, () => {
  console.log("listening the port at 9000");
});

//  API
//  get-read
//  post-create
//  put-update
//  delete-delete
