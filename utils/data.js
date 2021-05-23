
import { default as valid_credit_card } from '../utils/luhn.js'

let accounts = {}

function formate_data(data) {
    let line = data.toString().trim().split(' ')
    
    // if Account Number is Valid Create account else (balace or amount) = error
    if (line[0] == "Add") {
       //  If the file has Add, PUSH INTO accounts Object. 

        accounts = (AccountInfo(line[1], line[2], line[3]))

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

 

AccountInfo.prototype.charge = function (person_name, balance) {
   
  
    if (accounts.name = person_name) {
        if (accounts.verified != true) return balance = 'error'
        if (accounts.balance + balance < accounts.limit) {
            account.balance += balance
        }
        console.log(`${accounts.person_name}: $${accounts.balance}`)
    }
       
 }

 AccountInfo.prototype.credit = function ( person_name, balance, account = new AccountInfo ) {

    
    if (accounts.name = person_name) {
        if (accounts.verified != true) return balance = 'error'
            account.balance -= balance
    } else {
        return
        }
        console.log(`${accounts.person_name}: $${accounts.balance}`)
     
 }
 

export default formate_data;


