// core node module
// create server
const http = require("http");
const fs = require("fs");
const _ = require("lodash");
// store as variable to use later
// create server takes in a callback function that runs every time a request is made to server
// going to the home page of the website will triger the callback function which will send back the home page
// .createServer has 2 arguments: request and response
// req and res are objects that contain information about the request and response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // example of redirect to another page. can use when renaming pages.
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data)
      // can use above when you are writing more than one thing to the page;
      res.end(data);
    }
  });
});

// without this, the server will not listen for requests being sent to it
// second argument, 'localhost', is not required because it is default. localhost is like a domain name that takes you to a specific IP address called a loopback IP address 127.0.0.1. it points back to your own computer
server.listen(3000, "localhost", () => {
  // console.log will not show up in browser console, but will show up in terminal
  console.log("listening for requests on port 3000");
});
