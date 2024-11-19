let fs = require('fs') 
let finaldata ;

// read and convert the content in upper case ;

function readFiles( path , filename , callback , newfilename = null ) {
      
    fs.readFile( path+filename , 'utf8' ,(err , data ) => {
        if(err) {
            console.log(err) ;
        }
          callback( path  , data , newfilename ) ;
           if( newfilename != null ){
            fs.appendFile( 'filenames.txt' , `${newfilename}\n` , (err) => console.log(err) ) ;
           }
        })
}
 
function toUpper( path , data , newfilename ) {
 fs.writeFile( path+ newfilename , data.toUpperCase() , (err) => console.log( err ) ) ;
}

function toLower( path , data , newfilename ) {
    let filedata = data.toLowerCase() ;
    filedata = filedata.split(/[.\n]/).filter((item) => { if( item ) { return item } }   ) ;
    fs.writeFile( path + newfilename , filedata.join() , (err) => console.log(err) ) ;
 }
 
function toSort( path , data , newfilename ) {
    let filedata = data.split(',').sort().join() ;
    fs.writeFile( path+newfilename , filedata , (err) => console.log(err) ) ;
} 
function toDelete( path , data , newfilename){
    let filenames = data.split('\n').filter( (item) => {if( item.length != 0 && item != null ){ return item }} ) ;
    filenames.map((item) => fs.unlink(item , (err) => console.log(err)) ) ;
}
module.exports = {readFiles , toDelete , toLower , toSort , toUpper } ;

