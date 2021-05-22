import { default as readline } from 'readline'
// import CreditRecordsCollection from './utils/collection.js';
import { default as formate_data } from './utils/data.js';
import { default as credit_Card_Inforamtion } from './utils/collection.js'




let content = [];
let accounts = [];
let transactions = []
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
  
    rl.on('line', function (data) {

        
        content.push(data.toString().split("\n"))

        //CreditRecordCollection an Object 
        /*
        Add Tom 4111111111111111 $5245
        Charge Tom $500
         Charge Tom $800
         Credit Lisa $100

[
  [
    {
      person_name: 'Tom',
      account_number: '4111111111111111',
      limit: 5245,
      amount: 0,
      verified: true
    }
  ]
]
        */

        let credit_data = credit_Card_Inforamtion(formate_data(content))
     
        // credit_data deals with Transctions
         

        // process.stdout.write(credit_data);

    })


export default rl; 
  /*
  [ 'add  johnds 23231231 $2313213' ],
  [ '' ],
  [ '' ],
  [ '' ],
  [ 'revcec frank wqewqeqwew, $413423423' ]
  */