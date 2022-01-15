const path = require("path");
// Import the filesystem module
const fs = require("fs");

const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/";

// The path.isAbsolute() method determines if path is an absolute path.
const convertToPathAbsolute = (inputPath) => {
  if (path.isAbsolute(inputPath)) {
    console.log('Es absoluta, la ruta es:');
    return inputPath;
  } else {
    //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
    console.log('Es relativa, la ruta absoluta sería: ');
    return path.resolve(inputPath);
  }
};

// Getting information for a file
statsObj = fs.statSync(absolutePathDirectory);
console.log(statsObj);
console.log("Path is file:", statsObj.isFile());
console.log("Path is directory:", statsObj.isDirectory());

showPath = convertToPathAbsolute(relativePathFile);
console.log(showPath);
