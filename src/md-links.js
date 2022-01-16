const path = require("path");
// Import the filesystem module
const fs = require("fs");

/* Function that verifies if the path exists */
const verifiesPathExist = (inputPath) => fs.existsSync(inputPath); // true o false

/* Function that converts the path to absolute */
const convertToPathAbsolute = (inputPath) => {
  // The path.isAbsolute() method determines if path is an absolute path.
  if (path.isAbsolute(inputPath)) {
    return inputPath;
  } else {
    //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
    return path.resolve(inputPath);
  }
};

/* Function to know if the path is a directory */
const verifiesPathIsDirectory = (inputPath) => {
  // Getting information for a file/directory
  statsObj = fs.statSync(inputPath);
  return statsObj.isDirectory(); // true or false
};

/* Function to open directory and show files */
const openDirectory = (inputPath) => {
  let listFiles = fs.readdirSync(inputPath);
  let filesArray = [];
  listFiles.forEach((file) => {
    const pathChild = path.resolve(inputPath, file)
    if (fs.statSync(pathChild).isFile()) {
      filesArray.push(pathChild);
    } else {
      const newDirectory = openDirectory(pathChild);
      filesArray = filesArray.concat(newDirectory);
    }
  })
  return filesArray;
};

/* Function to filter array and return array with only .md files */
const filterFilesmd = (array) => array.filter(file => path.extname(file) == ".md");

module.exports = {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd
}
