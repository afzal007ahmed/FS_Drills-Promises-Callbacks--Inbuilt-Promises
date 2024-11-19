import fs from "fs" ;

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

export function main( callback1 , callback2 , path , filename  , data = null ) {
    callback1( path , filename , data ) 
    .then((res) => {
        console.log( res ) ;
        callback2( path , filename )
        .then((res) => {
            console.log( res ) ;
        })
        .catch((err) => console.log(err)) ;
    })
    .catch((err) => {
      console.log(err) ;
    })
}

export function makeFiles( path , filename , data ) {
    return new Promise(( res , rej ) => {
        fs.writeFile(path + filename , JSON.stringify(data) , (err) =>
    {
        if( err ){
          rej(err) ;
        }
        res('File is Created') ;
    })});
} 

export function deleteFiles( path , filename ) {
    return new Promise ( (res , rej ) => {
        fs.unlink( path + filename , (err) => 
        {
            if( err ){
                rej(err) ;
            }
            res('File Deleted');
        }) 
    })
}

