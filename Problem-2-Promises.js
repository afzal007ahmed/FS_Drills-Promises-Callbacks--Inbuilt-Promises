import fs from "fs" 

export function readFiles(path, filename) {
    return new Promise((res, rej) => {
        fs.readFile(path + filename, 'utf8', (err, data) => {
            if (err) {
                rej(err);
            }
            res(data);
        });
    });
}

export function toUpper(data, newfilename, path) {
 
    return new Promise((res, rej) => {
        fs.appendFile( path+'filename.txt', newfilename  , (err) => {
            
            if(err) 
            {
                rej(err) ;
            }

            else{
                fs.writeFile(path + newfilename, data.toUpperCase(), (err) => {
                    if (err) {
                        rej(err);
                    }
                    res(data.toUpperCase());
                });
            }
        })

    });
}

export function toLower(path, data, filename) {

    return new Promise((res, rej) => {
        fs.appendFile( path+'filename.txt', `\n${filename}`  , (err) => {
            if(err) {
                rej( err ) ;
            }
            else{
                let filedata = data.toLowerCase().split(/[.\n]/).filter((item) => { if (item) return item }).join('\n');
                fs.writeFile(path + filename, filedata, (err) => {
                    if (err) {
                        rej(err);
                    }
                    res(filedata);
                });
            }
        })

    });
}

export function sortedFile(path, filename, data) {


    return new Promise((res, rej) => {
        fs.appendFile( path+'filename.txt', `\n${filename}`  , (err) => {if(err) 
            {
             rej(err)
            }
            else{
                let filedata = data.split('\n').sort().join('\n');
                fs.writeFile(path + filename, filedata, (err) => {
                    if (err) {
                        rej(err);
                    }
                    res(filedata);
                });
            }
        })
        
    });
}

export function deleteFiles(path, data, index) {
    if (index >= data.length) {
        return;
    }
    fs.unlink(path + data[index], (err) => {
        if (err) {
            return err;
        }
        deleteFiles(path , data, index + 1);
    });
}

