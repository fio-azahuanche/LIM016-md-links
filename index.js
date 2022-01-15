module.exports = () => {
  // ...
};
/* const fs = require("fs"),
  FILE_NAME = "./sampleFiles/archivo.txt";

fs.readFile(FILE_NAME, 'utf8', (error, text) => {
    if (error) throw error;
    console.log("The content is: ", text);
}); */

const fs = require("fs");
const path = require("path");
fs.readdir("./sampleFiles", (error, files)=>{
  if (error){
    throw error;
  }
  console.log("array:");
  console.log(files);
  const ext1 = path.extname(files[0]);
  const ext2 = path.extname(files[1]);
  console.log(`extOfArray[0]: ${ext1}`);
  console.log(`extOfArray[1]: ${ext2}`);
});



