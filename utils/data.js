
// import { deque } from "collections/deque";
// import {deque} from '@data-structure/deque';

// System.import('/js/main.js');
// Find a replacement for namedTuple
const namedtuple = (element,[]) => {

}

Object.freeze(namedtuple)

import { default as is_luhn_valid } from '../utils/luhn.js'

let Account = namedtuple(
    'Accounts',
    ['name',
        'account_number',
        'limit',
        'amount',
        'verified'
    ])

    let Transaction = namedtuple(
        'Transations',
        ['type',
        'name',
        'amount',
        ])

function get_data() {
    let content
    //Open file content from file passed in
    try {
            const fs = require('fs')
            fs.readFile('./myprograminput.txt', (err, data) => {
                if (err) throw err;
                let result = data.toString().split(" ")
                content = data.toString().split("\n")
                //'Add Tom 4111111111111111 $1000'.. And continues to the second one. etc
                    })
    }
    finally { 

    // pass in from Terminal STDIN
        let content = process.stdin.once('data', (chunk) => {
                
            let line = chunk.toString().trim();
            content = line.split(' ');
            // console.log(result[0]) //Add
            // console.log(result[1]) //Tom
            // console.log(result[2])//4111111111111111
            // console.log(result[3]) //$1000
        
            
        })
    }
    return content
}

function formate_data(data, accounts=deque(), transactions = deque()) {
    for (const line in data.toString().trim()) {
        line = line.split(' ')
       
        if (line[0] == 'Add') {
            accounts.append(Account(
                name = line[1],
                account_number = line[2],
                limit = parseInt(line[3]).slice(1),
                amount = 0,
                verified = is_luhn_valid(line[2])
            ))
            
        } else {
            transactions.append(Transaction(
                type = line[0],
                name = line[1],
                // [1:] is to slice off from the 1th index
                amount = parseInt(line[2][1]).slice(1)
            ))
        }
    }
    return (accounts, transactions)
}

let variable = "test variable"

export default { get_data, formate_data };
    
 export {Transaction, Account};