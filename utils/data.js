
import { default as valid_credit_card } from '../utils/luhn.js'



function formate_data(data) {
    let line = data.toString().trim().split(' ')
    
    // if Account Number is Valid Create account else (balace or amount) = error
    if (line[0] == "Add") {
       // instance of a new Account
          accountInfo(line[0], line[1], line[2], line[3]) 
        
    } else if (line[0] == 'Charge') {
        charge(line[1], line[2])
     
    } else if (line[0] == 'Credit') {
        credit(line[1], line[2])

    }
    
}

function accountInfo(type, person_name, account_number, limit, balance = 0, verified= "") {
    
    // if not valid_credit_card != balance  =  "err0r"
    type = type
    person_name = person_name;
    account_number = account_number;
    limit = limit;
    balance = 0;
    verified = valid_credit_card(account_number);
    //return value as object
    return {
        type,
        person_name,
        account_number,
        limit,
        balance,
        verified
    }
}

function charge( person_name, balance,  account = accountInfo()) {
    
        
        // if (account.verified != true) return balance = 'error'
        // if (account.balance + balance < account.limit && account.person_name == person_name) {
        //       account.amount += balance
        // } else {
        //     return  // do nothing
        // }
        console.log(`${person_name}: ${balance}`)
 }

 function credit( person_name, balance,  account = accountInfo()) {
    //     if (account.verified != true) return balance = 'error'
    //  if (account.person_name == person_name) {
    //        return account.balance -= balance
    // }
     console.log(`${person_name}: ${balance}`)
}
    

export default formate_data; 
