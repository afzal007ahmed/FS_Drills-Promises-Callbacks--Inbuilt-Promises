import { makeDirectory2 , makeFiles , deleteFiles } from "../Problem-1-Inbuilt-Promises.js"


makeDirectory2('/home/afzal-ahmed/Downloads/' ,'AllJsonFiles'  )
.then(() => {
    return makeFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/' , 'file-1.json' , 'Add this data' )
})
.then(() => deleteFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/','file-1.json')) 
.then((res) => console.log('All Files Deleted')) ;