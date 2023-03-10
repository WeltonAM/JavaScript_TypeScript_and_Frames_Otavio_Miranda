const fs = require('fs').promises;
const path = require('path');


async function readdir(rootDir) {

    // fs.readdir('./')
    rootDir = rootDir || path.resolve(__dirname)

    const files = await fs.readdir(rootDir)

    walk(files);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/\.node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        
        if(!/\.html$/g.test(fileFullPath)) continue;

        console.log(file, stats.isDirectory())
    }
}

readdir('C:\\Users\\pilgr\\Documents\\Programador\\Cursos\\JavaScript_TypeScript_and_Frames_Otavio_Miranda')