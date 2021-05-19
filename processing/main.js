import CreditRecordsCollection from '../utils/collection.js';
import { default as get_data } from '../utils/data.js'
import { default as format_data } from '../utils/data.js'
import { default as variable } from '../utils/data.js'

let name

if (name = '') {
    data = get_data()
    accounts, transactions = format_data(data = data)

    let credit_data = CreditRecordsCollection(accounts = accounts)
    credit_data.process(transactions = transactions)

    console.log(credit_data)
}
