const chalk = require("chalk");
const {mdLinks} = require ('./index.js');

const optionDefault = (path) => {mdLinks(path, { validate: false })
  .then(links => {
     console.log(links.map((link) => `${chalk.gray.bold('✔ file:')} ${chalk.gray(link.file)}\n${chalk.green.bold('✔ href:')} ${chalk.green(link.href)}\n${chalk.blue.bold('✔ text:')} ${chalk.blue(link.text)}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

const optionValidate = (path) => {mdLinks(path, { validate: true })
  .then(links => {
    console.log(links.map((link) => `${chalk.green.bold('✔ href:')} ${chalk.green(link.href)}\n${chalk.blue.bold('✔ text:')} ${chalk.blue(link.text)}\n${chalk.gray.bold('✔ file:')} ${chalk.gray(link.file)}\n${chalk.yellow.bold('▫ status:')} ${chalk.yellow(link.status)}\n${chalk.magenta.bold('▫ message:')} ${chalk.magenta(link.message)}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

const optionStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    console.log(`${chalk.cyanBright('Total:')} ${chalk.cyan(totalLinks.length)}\n${chalk.greenBright('Unique:')} ${chalk.green(uniqueLinks.size)}`);
  })
  .catch(error => {
    console.log (error);
  })
};

const optionValidateStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    const arrayBrokenLinks = links.map(link => link.message);
    const brokenLinks = arrayBrokenLinks.filter(item => item === 'FAIL');
    console.log(`${chalk.cyanBright('Total:')} ${chalk.cyan(totalLinks.length)}\n${chalk.greenBright('Unique:')} ${chalk.green(uniqueLinks.size)}\n${chalk.redBright('Broken:')} ${chalk.red(brokenLinks.length)}`);
  })
  .catch(error => {
    console.log (error);
  })
};

module.exports = {
  optionDefault,
  optionValidate,
  optionStats,
  optionValidateStats,
}
