#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require('figlet');

const {
  optionDefault,
  optionValidate,
  optionStats,
  optionValidateStats,
} = require ('./cli-options.js')

path = process.argv[2];
options = process.argv;

const infoText = `⚠️  Invalid information. To see list of available commands, use 'md-links --help'.`;
const help = `
###################################################################################################################

usage: md-links <path-to-file> [options]

The options are the following:

--validate         => Returns more advanced link information: href, text, file, status, ok/fail.
--stats            => Returns the total number of links and unique links.
--validate --stats => Returns the total number of links (total), unique links (unique) and broken links (broken).
      or
--stats --validate

###################################################################################################################
`;

const banner = figlet.textSync('<md-links>', {
  font: 'ANSI shadow',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
})

// If something is not entered
if (options.length === 2) {
  console.log(chalk.bgRedBright(infoText));
}
// Option --help
else if(options.length === 3 && options[2] === '--help') {
  console.log(chalk.green(help));
}
// If only path is entered
else if (options.length === 3) {
  console.log(chalk.greenBright.bold(banner));
  return optionDefault(path)
}
// If a path and an option are entered
else if(options.length === 4 && options[3] === '--validate') {
  console.log(chalk.greenBright.bold(banner));
  return optionValidate(path)
}
else if(options.length === 4 && options[3] === '--stats') {
  console.log(chalk.greenBright.bold(banner));
  return optionStats(path);
}
//  If path and two options are entered
else if(options.length === 5 && options[3] === '--validate' && options[4] === '--stats') {
  console.log(chalk.greenBright.bold(banner));
  return optionValidateStats(path);
}
else if(options.length === 5 &&  options[3] === '--stats' &&  options[4] === '--validate'){
  console.log(chalk.greenBright.bold(banner));
  return optionValidateStats(path);
// Other cases
} else {
  console.log(chalk.bgRedBright(infoText));
}

