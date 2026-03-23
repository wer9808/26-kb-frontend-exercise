const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "readMe.txt");

const readStream = fs.createReadStream(targetPath);

readStream
  .on("data", (chunk) => {
    console.log(chunk.toString());
  })
  .on("end", () => {
    console.log("EOF");
  })
  .on("error", (err) => {
    console.log(err);
  });
