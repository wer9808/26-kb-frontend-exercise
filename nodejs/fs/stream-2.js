const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "readMe.txt");
const targetPath = path.join(__dirname, "writeMe.txt");

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(targetPath);

readStream
  .on("data", (chunk) => {
    writeStream.write(chunk);
  })
  .on("end", () => {
    console.log("EOF");
    writeStream.close();
  })
  .on("error", (err) => {
    console.log(err);
  });
