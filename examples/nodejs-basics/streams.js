const fs = require("fs");

const readStream = fs.createReadStream("./file-system/blog3.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./file-system/blog4.txt");

// readStream.on("data", (chunk) => {
//   console.log("---- NEW CHUNK ----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// pipe method streams
readStream.pipe(writeStream);
