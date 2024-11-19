import { makeFiles , deleteFiles } from "../Problem-1-Inbuilt-Promises.js"

makeFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/' , 'file-1.json' , 'Add this data' )
.then(() => {
    console.log('File Created') ;
    deleteFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/' , 'file-1.json'  )
    .then(() => {
        console.log('File Deleted') ;
    })
    .catch((err) => console.log(err) ) 
})
.catch((err) => console.log(err)) ;