const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd,
  getLinks,
  getStatusLink} = require('./md-links.js');

/* const absolutePathFile = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/moreFiles/README.md";
const relativePathFile = "./sampleFiles/README.md";
const absolutePathDirectory = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const relativePathDirectory = "./sampleFiles/"; */

const mdLinks = (path, options = {validate:false}) => {
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

      if (arrayFilesmd.length>0) {
        const arrayLinks = getLinks(arrayFilesmd)

        if (arrayLinks.length>0){

          if (options.validate) { // Here is the validate: true
            getStatusLink(arrayLinks)
              .then( response => resolve(response) );
          } else {
            resolve(arrayLinks)
          }

        } else {
          reject('There are no Links, enter another path.')
        }

      } else {
        reject('No md files available, enter another path.')
      }

    } else {
      reject('Path input does not exist, enter another path.')
    }
  })
}

/* mdLinks(relativePathDirectory, { validate: true })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    }); */

module.exports = {
  mdLinks
}
