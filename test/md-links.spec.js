const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd,
  getLinks,
  getStatusLink
} = require('../src/md-links');

const relativePath = "./sampleFiles";
const absolutePath =  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles";
const directory =  "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles";
const path = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles/README.md";
const falsePath = "C:/Users/fiorela/Desktop/Laboratoria Lim016/proyectos/cuartoProyecto/LIM016-md-links/sampleFiles.md";
const arrayTest = [
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\file.txt",
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md",
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\README.md"
];
const arrayTestmd = [
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md",
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\README.md"
];
const arrayTestFilemd = [
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md"
];
const arrayLinksTest = [
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'here',
    file: 'C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md'
  }
];
const arrayEmpty= [];
const arrayWithoutLinks= ['C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\empty\\README.md'];

describe('verifiesPathExist', () => {
  it('should return True if a path exists', () => {
    expect(verifiesPathExist(path)).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(verifiesPathExist(falsePath)).toBe(false)
  });
});

describe('convertToPathAbsolute', () => {
  it('should convert a path relative to absolute', () => {
    expect(convertToPathAbsolute(relativePath)).toBe(absolutePath);
  });
  it('should convert a path absolute to absolute', () => {
    expect(convertToPathAbsolute(directory)).toBe(directory);
  });
});

describe('verifiesPathIsDirectory', () => {
  it('should return True if the path is a Directory', () => {
    expect(verifiesPathIsDirectory(directory)).toBe(true);
  });
  it('should return False if the path is not a Directory', () => {
    expect(verifiesPathIsDirectory(path)).toBe(false);
  });
});

describe('openDirectory', () => {
  it('should opens a directory and show an array of files', () => {
    expect(openDirectory(directory)).toEqual(arrayTest);
  });
});

describe('filterFilesmd', ()=> {
  it ('should filter an array and keep only md files', ()=>{
    expect(filterFilesmd(arrayTest)).toEqual(arrayTestmd)
  });
});

describe('getLinks', () => {
  it ('should display an array with all links from files .md', () => {
    const data = [
      {
        href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/wrong',
        text: 'here',
        file: 'C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md'
      }
    ];
    expect(getLinks(arrayTestFilemd)).toEqual(data);
  });
  it ('should display an empty array when is empty', () => {
    expect(getLinks(arrayEmpty)).toEqual(arrayEmpty)
  });
  it ('should display and empty array when there is not any links inside file .md', () => {
      expect(getLinks(arrayWithoutLinks)).toEqual(arrayEmpty)
  });
})

describe('getStatusLink', () => {
  it('should display an array with file, href, ok, status and text', () => {
    return getStatusLink(arrayLinksTest)
    .then( response => {
      const data = [
        {
          "file": "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md",
          "href": "http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175",
          "ok":"OK",
          "status": 200,
          "text": "here"
        }
      ];
      expect(response).toEqual(data);
    })
  });
  it('the fetch fails with an error', () => {
    return getStatusLink(arrayEmpty)
    .catch( (e) => {
      const error = [
        {
          "file": "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\empty",
          "href": "https://nodejs.og/es/",
          "ok":"FAIL",
          "status": 'Failed request',
          "text": "Broken"
        }
      ];
      expect(e).toEqual(error);
    });
  });
})
