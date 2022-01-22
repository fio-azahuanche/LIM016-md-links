const {mdLinks} = require ('./index.js');

const optionDefault = (path) => {mdLinks(path, { validate: false })
  .then(links => {
     console.log(links.map((link) => `file: ${link.file}\nhref: ${link.href}\ntext: ${link.text}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

const optionValidate = (path) => {mdLinks(path, { validate: true })
  .then(links => {
    console.log(links.map((link) => `href: ${link.href}\ntext: ${link.text}\nfile: ${link.file}\nstatus: ${link.status}\nok: ${link.ok}`).join('\n\n'))})
  .catch(error => {
    console.log(error);
  })
};

const optionStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    console.log(`Total: ${totalLinks.length}\nUnique: ${uniqueLinks.size}`);
  })
  .catch(error => {
    console.log (error);
  })
};

const optionValidateStats = (path) => {mdLinks(path, {validate: true})
  .then( links => {
    const totalLinks = links.map(link =>link.href);
    const uniqueLinks = new Set(totalLinks);
    const arrayBrokenLinks = links.map(link => link.ok);
    const brokenLinks = arrayBrokenLinks.filter(item => item === 'FAIL');
    console.log(`Total: ${totalLinks.length}\nUnique: ${uniqueLinks.size}\nBroken: ${brokenLinks.length}`);
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
