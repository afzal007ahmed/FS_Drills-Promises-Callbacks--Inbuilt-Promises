import { readFiles , toUpper , toLower , sortedFile , deleteFiles } from "../Problem-2-Promises.js" ;
import fs from "fs" 
readFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', 'lipsum.txt')
    .then((res) => {
        toUpper(res, 'file1.txt', '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/')
            .then((res) => {
                fs.appendFile('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/filename.txt', 'file1.txt', (err) => {
                    if (err) {
                        console.log(err);
                    }
                    toLower('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', res, 'file-2.txt')
                        .then((res) => {
                            fs.appendFile('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/filename.txt', '\nfile-2.txt', (err) => {
                                if (err) console.log(err);

                                sortedFile('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', 'file-3.txt', res)
                                    .then((res) => {
                                        fs.appendFile('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/filename.txt', '\nfile-3.txt', (err) => {
                                            if (err) console.log(err);

                                            readFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', 'filename.txt')
                                                .then((res) => {
                                                    res = res.split('\n').filter((item) => { if (item) return item });
                                                    deleteFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', res, 0);
                                                })
                                                .catch((err) => console.log(err));
                                        });
                                    })
                                    .catch((err) => console.log(err));
                            });
                        });
                });
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
