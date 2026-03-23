const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "readMe.txt");
const targetPath = path.join(__dirname, "writeMe.txt");

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(targetPath);

readStream.pipe(writeStream);
