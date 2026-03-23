const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "example.txt"));
fs.writeFileSync(path.join(__dirname, "text-1.txt"), data);

fs.writeFile(path.join(__dirname, "text-2.txt"), data, () => {});
