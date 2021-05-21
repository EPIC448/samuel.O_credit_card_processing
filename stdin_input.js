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

        accounts, transactions = formate_data(content)
        let credit_data = CreditRecordsCollection(accounts = accounts)
        credit_data.process(transactions = transactions)

        process.stdout.write(credit_data);

    })


export default rl; 
  /*
  [ 'add  johnds 23231231 $2313213' ],
  [ '' ],
  [ '' ],
  [ '' ],
  [ 'revcec frank wqewqeqwew, $413423423' ]
  */