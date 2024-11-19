import {promises as fs} from "fs" ;

/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/



export function readFiles(path, filename) {
    return fs.readFile(path + filename, 'utf8') ;
}

export function toUpper(path, newfilename, data) 
{ 
     fs.appendFile( path+'filename.txt' , newfilename , (err) => { if(err) console.log(err)}) ;
     return fs.writeFile(path + newfilename, data.toUpperCase())
   .then(() => {
    return fs.readFile( path+newfilename , 'utf8' ) 
   })
   .catch((err) => err ) 
}
export function toLower(path, newfilename, data) {
    fs.appendFile( path+'filename.txt' , `\n${newfilename}` , (err) => { if(err) console.log(err)}) ;
    let filedata = data.toLowerCase().split(/[.\n]/).filter((item) => { if (item) return item }).join('\n');
    return fs.writeFile(path + newfilename, filedata )
    .then(() => {
        return fs.readFile( path+newfilename , 'utf8' ) 
       })
       .catch((err) => err )  
}

export function sortContent( path , filename , data ) {
    fs.appendFile( path+'filename.txt' , `\n${filename}` , (err) => { if(err) console.log(err)}) ;
  let arr = data.split(/[.\n]/).sort().join() ;
   return fs.writeFile( path+filename , arr )
  .then(() => {
    return fs.readFile( path+filename , 'utf8' ) 
   })
   .catch((err) => err )  
}
export function deleteFiles( path , filename ) {
   fs.readFile(path+filename , 'utf8')
    .then(( res ) => {
        res = res.split('\n').filter((item) => {if( item ) return item }) ;
        res.map((item) => 
        {
            fs.unlink( path+item ) ;
        }
        )
    })
}
