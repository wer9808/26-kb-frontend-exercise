const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "test");

if (!fs.existsSync(targetPath)) {
  fs.mkdir(targetPath, () => {});
}
