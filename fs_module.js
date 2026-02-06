const fs = require("fs");

fs.readFile("swiggy.html", (err, data) => {
  if (err) {
    console.log("File not found");
  } else {
    console.log("File content:", data.toString());
  }
});
