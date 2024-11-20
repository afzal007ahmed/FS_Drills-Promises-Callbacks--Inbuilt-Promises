import { makeDirectory2 , makeFiles , deleteFiles } from "../Problem-1-Inbuilt-Promises.js"


makeDirectory2('/home/afzal-ahmed/Downloads/' ,'AllJsonFiles'  )
.then(() => {
    return makeFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/' , ['file-1.json' , 'file-2.json' , 'file-3.json' , 'file-4.json' , 'file-5.json' ] , 'Add this data' )
})
.then(() => { console.log( "All files created") ;
    return deleteFiles('/home/afzal-ahmed/Downloads/JS-FS-Drills/', ['file-1.json' , 'file-2.json' , 'file-3.json' , 'file-4.json' , 'file-5.json' ] )
}) 
.then((res) => console.log('All Files Deleted')) 
.catch((err) =>{
    console.log(err) ;
})