
import { default as valid_credit_card } from '../utils/luhn.js'
import { default as fs } from 'fs';

let accounts = {}

function formate_data(data) {
    let line = data.toString().trim().split(' ')
    if (line[0] == "Add") {
        accounts = (AccountInfo(line[1], line[2], line[3]))

        return process.stdout.write(`${accounts.person_name}: ${accounts.limit} \n`)
        
    } else if (line[0] == 'Charge') {
        
        AccountInfo.prototype.charge(line[1], line[2])
    } else if (line[0] == 'Credit') {
       AccountInfo.prototype.credit(line[1], line[2])

    }

}


function AccountInfo( person_name, account_number, limit, verified= "",balance = 0 ) {
    
    // if not valid_credit_card != balance  =  "error"
   
    person_name = person_name;
    account_number = account_number;
    limit = limit;
    verified = valid_credit_card(account_number);
    balance = verified != true ? "error" : balance;
    //return value as object
    return {
      
        person_name,
        account_number,
        limit,
        balance,
        verified
    }
}

function templateForCreditAndCharge(data) {
    let line = data.toString().trim().split(' ')
    
    if (line[0] == "Add") {
        accounts = (AccountInfo(line[1], line[2], line[3]))
    }
    
    return process.stdout.write(`${accounts.person_name}: ${accounts.limit} \n`)
}


function readFile() {
    fs.readFile('./input.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        
        
        data = (data.toString().split("\n"))
        var myStringArray = data;
        var arrayLength = myStringArray.length;
        for (var i = 0; i < arrayLength; i++) {
            templateForCreditAndCharge(myStringArray[i]);
        }
        
    })
    
}

AccountInfo.prototype.charge = function (person_name, balance) {
    readFile()
    console.log(accounts)
    accounts = accounts
    if (accounts.name == person_name) {
        if (accounts.verified != true) return balance = 'error'
        if (accounts.balance + balance < accounts.limit) {
            account.balance += balance
        }
        
    }
    return process.stdout.write(`${person_name}:  $${accounts.balance} \n`)
       
 }

 AccountInfo.prototype.credit = function ( person_name, balance ) {
    readFile() 

    if (accounts.name = person_name) {
        if (accounts.verified != true) return balance = 'error'
            accounts.balance -= balance
    } else {
        return
        }
       return  process.stdout.write(`${accounts.person_name}:  $${accounts.balance} \n`)
     
 }
 

export default formate_data; AccountInfo;


