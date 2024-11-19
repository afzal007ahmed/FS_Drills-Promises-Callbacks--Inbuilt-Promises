import {readFiles , toDelete , toLower , toSort , toUpper } from "../Problem-2.js" 


// 1 -2 . Read file and make a new file with uppercase .
readFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'lipsum.txt' , toUpper , 'lipsum-upper.txt' ) ;

// 3. make the content lowercase 
readFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'lipsum-upper.txt' , toLower  , 'lipsum-lower.txt' ) ;

// 4. make the content sorted  
readFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'lipsum-upper.txt' , toSort , 'sorted-lipsum.txt' ) ;

// 5. Delete all the files. 
readFiles( '/home/afzal-ahmed/Downloads/JS-FS-Drills/Test/' , 'filenames.txt' , toDelete ) ;