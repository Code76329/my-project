const student =(require('./logger.js').student);
const student1 =new student('john', 20, [90,80]);
console.log("name_student is",student1.name);
console.log("age_student is",student1.age);
const fs = require("node:fs");

const content = fs.readFileSync("./test.txt", "utf8");

console.log(content);