const path = require("path");
// Import the filesystem module
const fs = require("fs");

/* Function that verifies if the path exists */
const verifiesPathExist = (inputPath) => fs.existsSync(inputPath); // true o false

/* Function that converts the path to absolute */
const convertToPathAbsolute = (inputPath) => {
  // The path.isAbsolute() method determines if path is an absolute path.
  if (path.isAbsolute(inputPath)) {
    // console.log("It is absolute, the path is: ");
    return inputPath;
  } else {
    //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
    // console.log("It is relative, the absolute path would be: ");
    return path.resolve(inputPath);
  }
};

/* Function to know if the path is a directory */
const verifiesPathIsDirectory = (inputPath) => {
  // Getting information for a file/directory
  statsObj = fs.statSync(inputPath);
  return statsObj.isDirectory(); // true or false
};

module.exports = {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory
}
