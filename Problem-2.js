let fs = require('fs') 
let finaldata ;

// read and convert the content in upper case ;

function readFiles( path , filename , callback1 , callback2   ) {
      fs.readFile( path + filename , 'utf8' , ( err , data) =>{
        if( err ) {
            console.log( err ) ;
        }
        callback( path , data , 'file-1.txt' , callback2)
      })
}
 
function toUpper( path , data , newfilename , callback1 , callback2  ) {
    fs.appendFile( 'filenames.txt' , `${newfilename}\n` , (err) => console.log(err) ) ;
    fs.writeFile( path+ newfilename , data.toUpperCase() , (err) => { if( err ) console.log( err )
    callback1( path , data.toUpperCase() , 'file-2.txt')
    }
 ) ;

}

function toLower( path , data , newfilename ) {
    fs.appendFile( 'filenames.txt' , `${newfilename}\n` , (err) => console.log(err) ) ;
    let filedata = data.toLowerCase() ;
    filedata = filedata.split(/[.\n]/).filter((item) => { if( item ) { return item } }   ) ;
    fs.writeFile( path + newfilename , filedata.join() , (err) => console.log(err) ) ;
 }
 
function toSort( path , data , newfilename ) {
    fs.appendFile( 'filenames.txt' , `${newfilename}\n` , (err) => console.log(err) ) ;
    let filedata = data.split(',').sort().join() ;
    fs.writeFile( path+newfilename , filedata , (err) => console.log(err) ) ;
} 
function toDelete( path , data , newfilename){
    fs.appendFile( 'filenames.txt' , `${newfilename}\n` , (err) => console.log(err) ) ;
    let filenames = data.split('\n').filter( (item) => {if( item.length != 0 && item != null ){ return item }} ) ;
    filenames.map((item) => fs.unlink(item , (err) => console.log(err)) ) ;
}
module.exports = {readFiles , toDelete , toLower , toSort , toUpper } ;

