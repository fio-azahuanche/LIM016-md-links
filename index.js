module.exports = () => {
  // ...
};
const fs = require("fs"),
  FILE_NAME = "./archivo.txt";

fs.readFile(FILE_NAME, 'utf8', (error, text) => {
    if (error) throw error;
    console.log("The content is: ", text);
});
