const path = require("path");
// Import the filesystem module
const fs = require("fs");

const fetch = require("node-fetch");

/* Function that verifies if the path exists */
const verifiesPathExist = (inputPath) => fs.existsSync(inputPath); // return true or false

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
  return statsObj.isDirectory(); // return true or false
};

/* Function to open directory and show files */
const openDirectory = (inputPath) => {
  let listFiles = fs.readdirSync(inputPath);
  let filesArray = [];
  listFiles.forEach((file) => {
    const pathChild = path.resolve(inputPath, file);
    if (fs.statSync(pathChild).isFile()) {
      filesArray.push(pathChild);
    } else {
      const newDirectory = openDirectory(pathChild);// return array newDirectory that is a file
      filesArray = filesArray.concat(newDirectory);
    }
  });
  return filesArray;
};

/* Function to filter array and return array with only .md files */
const filterFilesmd = (array) => array.filter(file => path.extname(file) == ".md");

/* Function to obtain links in array */
// option validate: false
const getLinks = (arrayPathmd) => {
  const regExp = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gi;
  const regExpText = /\[(.*)\]/g;
  const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
  let arrayLinks = [];
  if (arrayPathmd.length > 0) {
    arrayPathmd.forEach((path) => {
      const fileContent = fs.readFileSync(path, 'utf8'); // return string
      const arrayLinksOfEachFile = fileContent.match(regExp); // return arrays
      if (arrayLinksOfEachFile) {
        let arrayDetailed = [];
        arrayLinksOfEachFile.forEach((link) => {
          // join links and remove parentheses
          const linksResolve = link.match(regExpURL).join().slice(1, -1);
          // remove the brackets
          const textResolve = link.match(regExpText).join().slice(1, -1);
          const object = {
            href: linksResolve,
            text: textResolve,
            file: path,
          }
          arrayDetailed.push(object);
        });
        arrayLinks = arrayLinks.concat(arrayDetailed);
      }
    })
  };
  return arrayLinks;
};

// trying fetch and http request
fetch("http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175")
  .then(function(response){
    console.log(response.status, response.statusText);
});

module.exports = {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd,
  getLinks
}
