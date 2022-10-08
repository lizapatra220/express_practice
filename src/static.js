const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const hbs = require("hbs");
const requests = require("requests");

//built in middleware--------------
//static file----------
const staticpath = path.join(__dirname, "../public");
//template --
const template_path = path.join(__dirname, "../templates/views");
//partials--
const partialpath = path.join(__dirname, "../templates/partials");

//set view template engine--
app.set("view engine", "hbs");
app.set("views", template_path); //(views dir change )
hbs.registerPartials(partialpath);

// app.use(express.static(staticpath));

//tempate engine route----
app.get("/", (req, res) => {
  res.render("index", {
    contactNo: 6372846633,
  });
});

app.get("/", (req, res) => {
  res.send("hello from the express server");
});

app.get("/about", (req, res) => {
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=a34df139e3277661f1e8309043f860da`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrdata = [objdata];
      console.log(
        `city name is ${arrdata[0].name} and temp is ${arrdata[0].main.temp}`
      );
      res.write(arrdata[0].name);
    })

    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);

      // console.log("end");
      // res.end("file not found");
      res.end();
    });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about", (req, res) => {
  res.send("hello its about page");
});

//404--
app.get("*", (req, res) => {
  res.render("404", {
    errorcontent: "oops page couldnot be found",
  });
});

app.listen(port, () => {
  console.log(`listen to my ${port}`);
});
