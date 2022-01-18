const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd,
  getLinks} = require('./md-links.js');

const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/";
const arrayWithMdFiles = [
  'C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md',
  'C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\README.md'
];
/* console.log(verifiesPathExist(absolutePathFile));
console.log(convertToPathAbsolute(relativePathDirectory));
console.log(verifiesPathIsDirectory(absolutePathDirectory));
console.log(verifiesPathExist(relativePathFile));
const proof = openDirectory(relativePathDirectory);
console.log(proof); */

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

/* const proof2 = mdLinks(relativePathDirectory, { validate:false });
console.log(proof2); */

console.log(getLinks(arrayWithMdFiles));

module.exports = {
  mdLinks
}
