#!/usr/bin/env node

const {
  optionDefault,
  optionValidateStats,
  optionValidate,
  optionStats
} = require ('./cli-options.js')

path = process.argv[2];
options = process.argv;

const helpWithoutPathOption = 'Invalid information. If you need more help, use md-links --help.';
const help = `
**************************************************************************************************
.---.---.---.---.---.--------.
| H | E | L | P | - |  Enter |
'---'---'---'---'---'--------'

You have to use: md-links <path-to-file> [options]
or
md-links <path-to-file> => Returns basic information of the links: href, text, file.

The options are the following:
1) --validate => Returns more advanced link information: href, text, file, status, ok/fail.
2) --stats => Returns the total number of links and unique links.
3) --validate --stats or --stats --validate => Returns the total number of links (total),
                                               unique links (unique) and broken links (broken).

*****************************************************************************************************
`;

// If something is not entered
if (options.length === 2) {
  console.log (helpWithoutPathOption);
}
// Option --help
else if(options.length === 3 && options[2] === '--help') {
  console.log (help);
}
// If only path is entered
else if (options.length === 3) {
  return optionDefault(path)
}
// If a path and an option are entered
else if(options.length === 4 && options[3] === '--validate') {
  return optionValidate(path)
}
else if(options.length === 4 && options[3] === '--stats') {
  return optionStats(path);
}
//  If path and two options are entered
else if(options.length === 5 && options[3] === '--validate' && options[4] === '--stats') {
  return optionValidateStats(path);
}
else if(options.length === 5 &&  options[3] === '--stats' &&  options[4] === '--validate'){
  return optionValidateStats(path);
// Other cases
} else {
  console.log(help);
}
