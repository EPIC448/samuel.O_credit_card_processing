import CreditRecordsCollection from '../utils/collection.js';
import { default as get_data } from '../utils/data.js'
import { default as format_data } from '../utils/data.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let name

if (require.main === module) {
    data = get_data()
    accounts, transactions = format_data(data = data)

    let credit_data = CreditRecordsCollection(accounts = accounts)
    credit_data.process(transactions = transactions)

    process.stdout.write(credit_data); 

    // console.log(credit_data)
}
