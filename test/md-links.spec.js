const {
  verifiesPathExist,
  convertToPathAbsolute,
  verifiesPathIsDirectory,
  openDirectory,
  filterFilesmd } = require('../src/md-links');

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
  "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\moreFiles\\README.md", "C:\\Users\\fiorela\\Desktop\\Laboratoria Lim016\\proyectos\\cuartoProyecto\\LIM016-md-links\\sampleFiles\\README.md"
];

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
  it('should opens a Directory and show an array of files', () => {
    expect(openDirectory(directory)).toEqual(arrayTest);
  });
});

describe('filterFilesmd', ()=> {
  it ('should filter an array and keep only md files', ()=>{
    expect(filterFilesmd(arrayTest)).toEqual(arrayTestmd)
  })
});
