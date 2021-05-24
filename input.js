import { default as fs } from 'fs';
import { default as formate_data } from './utils/data.js';

// import CreditRecordsCollection from './utils/collection.js';

    
    fs.readFile('./input.txt', 'utf8',(err, data) => {
                    
                if (err) throw err;
        data = (data.toString().split("\n"))
        
        var myStringArray = data;
            var arrayLength = myStringArray.length;
            for (var i = 0; i < arrayLength; i++) {
                formate_data(myStringArray[i]);
            }
              
     })
         
          
    

