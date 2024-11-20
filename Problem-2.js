import fs from "fs"

// read and convert the content in upper case ;

export function readFiles(path, filename, callback1, callback2, callback3, callback4) {
    fs.readFile(path + filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            callback1(path, data, 'file-1.txt', (data) => {
                callback2(path, data, 'file-2.txt', (data) => {
                    callback3(path, data, 'file-3.txt', (data) => {
                        callback4(path, 'filenames.txt');
                    })
                })
            })
        }
    })
}

export function toUpper(path, data, newfilename, callback) {
    fs.appendFile('filenames.txt', `${newfilename}\n`, (err) => {
        if (err) console.log(err)
        else {
            fs.writeFile(path + newfilename, data.toUpperCase(), (err) => {
                if (err) console.log(err)
                else {
                    callback(data);
                }
            });

        }
    });


}

export function toLower(path, data, newfilename, callback) {
    fs.appendFile('filenames.txt', `${newfilename}\n`, (err) => {
        if (err) console.log(err)
        else {
            let filedata = data.toLowerCase();
            filedata = filedata.split(/[.\n]/).filter((item) => { if (item) { return item } });
            fs.writeFile(path + newfilename, filedata.join('\n'), (err) => {
                if (err) console.log(err)
                else {
                    callback(filedata.join('\n'));
                }
            });

        }
    });

}

export function toSort(path, data, newfilename, callback) {
    fs.appendFile('filenames.txt', `${newfilename}\n`, (err) => {
        if (err) console.log(err)
        else {
            let filedata = data.split(',').sort().join();
            fs.writeFile(path + newfilename, filedata, (err) => {
                if (err) console.log(err)
                else {
                    callback(filedata);

                }
            });
        }
    });

}
export function toDelete(path, filename) {
    fs.readFile(path + filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            data = data.split('\n').filter((item) => { if (item) return item });
            data.map((item) => {
                fs.unlink(item, (err) => { if (err) console.log(err) });
            })
        }
    })
}

