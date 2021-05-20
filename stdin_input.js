import { default as readline } from 'readline'
import { default as format_data } from './utils/data.js'
import CreditRecordsCollection from './utils/collection.js';

function stdin() {
    let content = []
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
  
    rl.on('line', function (data) {
        //   content.push(data.toString().split("\n"));
        content.push(data.toString().split("\n"))
        //   return content
        accounts, transction = formate_data(content)

        let credit_data = CreditRecordsCollection(accounts = accounts)
        credit_data.process(transactions = transactions)

        process.stdout.write(credit_data);

    })
}

stdin()

  /*
  [ 'add  johnds 23231231 $2313213' ],
  [ '' ],
  [ '' ],
  [ '' ],
  [ 'revcec frank wqewqeqwew, $413423423' ]
  */