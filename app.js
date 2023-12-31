const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
// creating an instance of an express app
const app = express();

const dbURL =
  "mongodb+srv://ryleepeterson:mave2020@cluster0.jru6h3h.mongodb.net/node-tut?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then(
    (
      result // listen for requests
    ) => app.listen(3000)
  )
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// respond to requests
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.send("<p>About</p>");
  // __dirname gets the current directory
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 page
// .use() is a method that allows us to create middleware and fire middleware functions/
// .use() is a catch all route for anything that doesn't match the above routes
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
