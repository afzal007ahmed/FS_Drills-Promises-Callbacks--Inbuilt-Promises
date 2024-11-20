import fs from "fs";

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/


export function makeDirectory1( path , directoryname ) {
    return new Promise ( (res , rej ) => {
        fs.mkdir( path + directoryname , (err) => {
            if( err.code == 'EEXIST' ) {
                res() ;
            } 
            else if( err ) {
                rej() ;
            }
            else{
                res() ;
            }
        })
    })
}
export function makeFiles(path, filename, data) {
    return new Promise((res, rej) => {
        fs.writeFile(path + filename, JSON.stringify(data), (err) => {
            if (err) {
                rej(err);
            }
            else
            res('File is Created');
        })
    });
}

export function deleteFiles(path, filename) {
    return new Promise((res, rej) => {
        fs.unlink(path + filename, (err) => {
            if (err) {
                rej(err);
            }
            else
            res('File Deleted');
        })
    })
}

