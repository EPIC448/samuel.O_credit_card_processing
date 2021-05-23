
import { default as valid_credit_card } from '../utils/luhn.js'


let newAcc = []
function formate_data(data) {
    let line = data.toString().trim().split(' ')
    
    // if Account Number is Valid Create account else (balace or amount) = error
    if (line[0] == "Add") {
       // instance of a new Account
        newAcc.push(AccountInfo(line[1], line[2], line[3]))
        console.log(newAcc)

    } else if (line[0] == 'Charge') {
        
        AccountInfo.prototype.charge(line[1], line[2])
    } else if (line[0] == 'Credit') {
       AccountInfo.prototype.credit(line[1], line[2])

    }

}

function AccountInfo( person_name, account_number, limit, verified= "",balance = 0 ) {
    
    // if not valid_credit_card != balance  =  "err0r"
   
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

AccountInfo.prototype.charge= function ( person_name, balance, account = new AccountInfo) {
    
        // if (account.verified != true) return balance = 'error'
        // if (account.balance + balance > account.limit ) {
        //     account.balance += balance
                console.log(`${person_name}: ${balance}`)

        // } else {
        //     return  // do nothing
        // }
 }

 AccountInfo.prototype.credit = function ( person_name, balance, account = new AccountInfo ) {
    //     if (account.verified != true) return balance = 'error'
    //  if (account.person_name == person_name) {
    //       account.balance -= balance
         console.log(`${person_name}: ${balance}`)

    //  } else {
    //      return
    // }
    
}
    

