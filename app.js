const fs = require("node:fs");
const filecontent = fs.readFileSync("./test.txt", "utf8");
console.log("filecontent", filecontent);
