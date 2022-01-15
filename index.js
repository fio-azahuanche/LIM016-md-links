const path = require("path");
// Import the filesystem module
const fs = require("fs");
const { exit } = require("process");

const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/";

// The path.isAbsolute() method determines if path is an absolute path.
const convertToPathAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    console.log("It is absolute, the path is: ");
    return inputPath;
  } else {
    //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
    console.log("It is relative, the absolute path would be: ");
    return path.resolve(inputPath);
  }
};

// validate if the path exists
const verifiedPathExist = (inputPath) =>{
  const pathExist = fs.existsSync(inputPath)
  return pathExist;
}

// Getting information for a file
statsObj = fs.statSync(absolutePathDirectory);
console.log(statsObj);
console.log("Path is file:", statsObj.isFile());
console.log("Path is directory:", statsObj.isDirectory());

showPath = convertToPathAbsolute(relativePathFile);
console.log(showPath);

existsPath = verifiedPathExist(relativePathDirectory);
console.log("Does the path exist? ",existsPath);
