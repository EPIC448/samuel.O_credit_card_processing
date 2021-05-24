// import CreditRecordsCollection from './utils/collection.js';
import { default as formate_data } from './utils/data.js';
// import { default as credit_Card_Inforamtion } from './utils/collection.js'

// working

import { default as readline } from 'readline'

let content = [];

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
rl.question('Input Data', data => {
     data = data.toString().split("\n")
      formate_data(data)
     
      rl.close();
    });
  
   
    



  