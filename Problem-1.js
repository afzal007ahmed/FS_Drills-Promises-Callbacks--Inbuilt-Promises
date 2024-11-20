import fs from "fs"

export function makeDirectory(path, directoryname, callback) {
    fs.mkdir(path + directoryname, (err) => {

        if( err.code == "EEXIST") {
            callback(path + directoryname + '/', 'file1.json', 'insert this data');
        }

        else if (err) {
        }

        else {
            callback(path + directoryname + '/', 'file1.json', 'insert this data');
        }
    })
}

export function CreateFiles(path, filename, data, callback) {
    fs.writeFile(path + filename, JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Files created") ;
            callback(path, filename);
        }
    })
}

export function deleteFiles(path, filename) {
    fs.unlink(path + filename, (err) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log("Files Deleted") ;
        }
    })
}