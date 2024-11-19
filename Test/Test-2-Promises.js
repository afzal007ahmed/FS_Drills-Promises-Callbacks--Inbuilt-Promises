import { readFiles , toUpper , toLower , sortedFile , deleteFiles } from "../Problem-2-Promises.js" ;
import fs from "fs" 
readFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/', 'lipsum.txt')
.then((res) => {return toUpper( res , 'file-1.txt' , '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' )} ) 
.then((res) => { return toLower( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/'  , res , 'file2.txt' )} )
.then((res) => sortedFile('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'file-3.txt' , res)) 
.then((res) => readFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'filename.txt' ))
.then((res) => deleteFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , res.split('\n').filter((item) => { if( item ) return item}) , 0 ) ) 
.catch((err) => console.log(err) ) ;