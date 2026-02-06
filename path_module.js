const path = require("path");

console.log("File name:", path.basename(__filename));
console.log("Directory:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));
