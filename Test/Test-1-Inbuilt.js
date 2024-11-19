import { makeFiles , deleteFiles } from "../Problem-1-Inbuilt-Promises.js"

makeFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/' , 'file-1.json' , 'Add this data' )
.then(() => deleteFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/','file-1.json')) 
.then((res) => console.log('All Files Deleted')) ;