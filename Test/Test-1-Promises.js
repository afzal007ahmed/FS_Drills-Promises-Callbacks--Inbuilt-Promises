import {  makeFiles , deleteFiles } from "../Problem-1-Promises.js" ;
makeFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'file-1.txt' , 'insert this data') 
.then((res) => {
    console.log(res);
    return deleteFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'file-1.txt')
})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err);
})