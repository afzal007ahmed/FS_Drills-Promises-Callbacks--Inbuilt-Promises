let fs = require('fs');
const { resolve } = require('path');

// function createFiles(path, filename, data = null) {
//     fs.writeFile( path + filename , data )
//         .then(() => {
//             console.log() ;
//         })
//         .catch((err) => {
//             console.log( err ) ;
//         })

// }

// function createFiles( path , filename , data = null ) {
//     fs.writeFile( path + filename, data , (err) => { if( err ) console.log(err) } ) ;
// }
function createFiles( path , filename , data = null ){
 return new Promise( async ( res , rej ) => {
    await fs.writeFile(path+filename, data , (err) => { rej(err)} ) ;
    res("File Created Successfully") ;
 })
} 
function DeleteFiles(path, filename, data = null) {
    fs.unlink(path + filename , (err) => { if( err) console.log(err)});
}

 function allActions(path, filename, callback, data = null) {
    return callback(path, filename, data);
}

module.exports = { createFiles , allActions , DeleteFiles } ;

