import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function HolyFlush(dir, total_struct = []) {
    // Getting structure subdirectory
    let cur_struct = fs.readdirSync(dir);

    let dirIdx = 0;
    let fileIdx = 0; 

    cur_struct.forEach((elem) => {
        let oldPath = path.join(dir,elem);

        if(fs.statSync(oldPath).isDirectory()){
            // If yes, check subdirectory             
            total_struct = HolyFlush(oldPath, total_struct);
            
            // After total_struct returns, rename folder
            fs.renameSync(oldPath, path.join(dir,dirIdx.toString()));
            
            // Increment count
            dirIdx++;
        } else {
            // Get extension of file
            let ext = path.extname(oldPath);

            // if not rename file
            fs.renameSync(oldPath, path.join(dir,fileIdx.toString() + ext));
            fileIdx++;
        }        
    });

    // Return true 
    return true;

};
 
if(HolyFlush(path.join(__dirname, "structure"))) {
    console.log("Folder structure has been entirely renamed.");
} else {
    console.log("An error as occurred.");
}
