const path = require("path");

console.log(path.join("some", "work", "ex.txt"));
console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.basename(__filename, path.extname(__filename)));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
