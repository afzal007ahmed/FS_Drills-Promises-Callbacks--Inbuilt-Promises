import fs from "fs" 
export function createDelete( path , filename , data) {
    fs.writeFile( path + filename , JSON.stringify( data ) , (err) => {
        if( err ) {
            console.log( err) ; 
        }
        fs.unlink( path + filename , ( err ) => {
            console.log( err ) ;
        })
    })
}
