// www.liza.com -welcome to my home page
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temp- welcome to my temp page
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.write("<h1>welcome to my home page</h1>");
  res.write("<h1>welcome to my home page</h1>");
  res.send();
});
app.get("/about", (req, res) => {
  res.send("welcome to my about page");
});
app.get("/contact", (req, res) => {
  res.status(200).send("welcome to my contact page");
});
app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: liza,
    },
    {
      id: 2,
      name: "reena",
    },
  ]);
});
//the methods are identical when an object or array is passes,
// but res.json() nwill also convert non-objects,
//such as null and undefined,which are not valid JSON.

app.listen(port, () => {
  console.log(`listen at  ${port}`);
});
