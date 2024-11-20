
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

import { promises as fs } from "fs" ;

export function makeDirectory2( path  , directoryname ) {
     return fs.mkdir( path + directoryname ) ;
}

export function makeFiles( path , filename , data = null ) {
 return fs.writeFile( path + filename , JSON.stringify(data))
}
export function deleteFiles( path , filename  ) {
    return fs.unlink( path+filename )
   }




