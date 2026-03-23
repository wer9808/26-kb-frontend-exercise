import fs from "fs";

const __dirname = import.meta.dirname;

fs.readdir(__dirname, (err, files) => {
  console.log(files);
});
