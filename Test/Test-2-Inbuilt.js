import { toLower , toUpper , sortContent , deleteFiles , readFiles } from "../Problem-2-Inbuilt-Promises.js" ;
readFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'lipsum.txt' ) 
.then((res) => toUpper('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'file-1.txt', res) ) 
.then( (res ) => toLower('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/','file-2.txt' , res ) ) 
.then((res) => sortContent('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' ,'file-3.txt' , res)) 
.then(() => readFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'filename.txt' ))
.then((res) => {deleteFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'filename.txt')}) 
.then(()=>{ console.log('All files are deleted')}) 
.catch((err) => console.log(err)) ;