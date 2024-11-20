import { makeDirectory1 , makeFiles, deleteFiles } from "../Problem-1-Promises.js";

makeDirectory1('/home/afzal-ahmed/Downloads/', 'AllJsonFiles')
    .then(() => {
        return makeFiles('/home/afzal-ahmed/Downloads/AllJsonFiles/', 'file-1.json', 'insert this data');
    })
    .then((res) => {
        console.log(res);
        return deleteFiles('/home/afzal-ahmed/Downloads/AllJsonFiles/', 'file-1.json')
    })
    .then((res) => console.log(res))
    .catch((err) => {
        console.log(err);
    })