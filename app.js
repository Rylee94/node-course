const express = require("express");

// creating an instance of an express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// respond to requests
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //   res.send("<p>Home!</p>");
  // __dirname gets the current directory
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<p>About</p>");
  // __dirname gets the current directory
  res.render("about", { title: "About" });
});

// blogs
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create New Blog" });
});

// 404 page
// .use() is a method that allows us to create middleware and fire middleware functions/
// .use() is a catch all route for anything that doesn't match the above routes
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
