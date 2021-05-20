import { default as fs } from 'fs';
import CreditRecordsCollection from './utils/collection.js';
import { default as formate_data } from './utils/data.js';

function get_data() {
    let content 
    //Open file content from file passed in
    
    fs.readFile('./input.txt', (err, data) => {
                    
                if (err) throw err;
                      data = (data.toString().split("\n"))
                    accounts, transactions =  formate_data(data = data)
                // [
                //     'Add Tom 4111111111111111 $1000',
                //     'Add Lisa 5454545454545454 $3000',
                //     'Add Quincy 1234567890123456 $2000',
                //     'Charge Tom $500',
                //     'Charge Tom $800',
                //     'Charge Lisa $7',
                //     'Credit Lisa $100',
                //     'Credit Quincy $200'
                //   ]
                let credit_data = CreditRecordsCollection(accounts = accounts)
                credit_data.process(transactions = transactions)
            
            })
            process.stdout.write(credit_data); 
         return content
          
}
export default get_data
    

