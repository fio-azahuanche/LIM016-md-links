const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd} = require('./md-links.js');

const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/";

/* console.log(verifiesPathExist(absolutePathFile));
console.log(convertToPathAbsolute(relativePathDirectory));
console.log(verifiesPathIsDirectory(absolutePathDirectory));
console.log(verifiesPathExist(relativePathFile));
const prueba = openDirectory(absolutePathDirectory);
console.log(filterFilesmd(prueba)); */

const mdLinks = (path, options) => {
  console.log(options);
  return new Promise((resolve, reject) => {
    const examplePath = convertToPathAbsolute(path);
    let arrayFilesmd = [];
    if (verifiesPathExist(examplePath)) {
      if (verifiesPathIsDirectory(examplePath)) {
        const arrayFiles = openDirectory(examplePath);
        if (arrayFiles.length > 0) {
          arrayFilesmd = filterFilesmd(arrayFiles);
        } else {
          reject('Directory is empty, process end');
        }
      } else {
        arrayFilesmd = filterFilesmd([examplePath]);
      }
    }
    resolve(arrayFilesmd);
  })
}

const prueba2 = mdLinks(relativePathDirectory, {validate:false});
console.log(prueba2);

module.exports = {
  mdLinks
}
