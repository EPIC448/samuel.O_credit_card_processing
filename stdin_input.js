import { default as readline } from 'readline'
import CreditRecordsCollection from './utils/collection.js';
import { default as formate_data } from './utils/data.js';



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

        accounts.push(formate_data(content))
        //CreditRecordCollection an Object 
        /*
        console.log(accounts)
        Add Tom 4111111111111111 $5245
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

        let credit_data = new CreditRecordsCollection(accounts)
      console.log(credit_data)
        // credit_data deals with Transctions
        // credit_data.process(transactions = transactions)

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