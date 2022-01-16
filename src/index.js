const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory } = require('./md-links.js');

const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/";

console.log(verifiesPathExist(absolutePathFile));
console.log(convertToPathAbsolute(relativePathDirectory));
console.log(verifiesPathIsDirectory(absolutePathDirectory));
console.log(verifiesPathExist(relativePathFile));

module.exports = {
  // ...
}
