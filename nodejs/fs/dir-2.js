const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "test2", "test3", "test4");

if (!fs.existsSync(targetPath)) {
  fs.mkdir(targetPath, { recursive: true }, () => {});
}
