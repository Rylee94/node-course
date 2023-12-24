// import core module 'fs' (built into node)
const fs = require("fs");

// reading files

// readFile('') takes in two arguments: path and callback
fs.readFile("blog1.txt", (err, data) => {
// callback function, takes two arguments: error and data
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
// returns a buffer (a series of bytes which is a package of data)
// PS C:\Users\rylee\portfolio-projects\node-course> node .\file-system\files.js
// <Buffer 68 65 6c 6c 6f 2c 20 77 6f 72 6c 64>

// use toString() to convert to string
});

// writing files

fs.writeFile("blog2.txt", "hello again, world", () => {
  console.log("new file created");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    console.log(err);
  });
  console;
}

// deleting files
if (fs.existsSync("deleteme.txt")) {
  fs.unlink("deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
