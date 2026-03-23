const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "text-1.txt");

if (fs.existsSync(targetPath)) {
  console.log("file already exists");
} else {
  const data = fs.readFileSync(path.join(__dirname, "example.txt"));
  fs.writeFileSync(path.join(__dirname, "text-1.txt"), data);
}
