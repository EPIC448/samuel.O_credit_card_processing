
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
    
        
        if (account.verified != true) return balance = 'error'
        if (account.balance + balance < account.limit && account.person_name == person_name) {
            return account.amount += balance
        } else {
            return  // do nothing
        }
 }

 function credit( person_name, balance,  account = accountInfo()) {
    
        if (account.verified != true) return balance = 'error'
     if (account.person_name == person_name) {
           return account.balance -= balance
        
    }
}
    
//     // const remove$ = (str) => {
//     //    return  str.replace('$', '')
        


//     let formateTransactionOrAcc = {
//         person_name: "",
//         acount_number: 0,
//         limit: 0,
//         amount:0,
//         verified: ''
          
//     }
//     let accObj = {
//         type: line[0],
//         person_name : line[1],
//         account_number : line[2],
//         // limit : parseInt(remove$(line[3])),
//         limit : line[3],
//         amount : 0,
//         verified : valid_credit_card(line[2])
//     }
    
//     let transactionObj = {
//         type: line[0],
//         person_name: line[1],
//         amount: line[2]      
//     }
    
    
//     var accTemplateMaker = function (object) {
//         return function (context) {
//             var replacer = function (key, val) {
//                 if (typeof val === 'function') {
//                     return context[val()]
//                 }
//                 return val;
//             }
//             return JSON.parse(JSON.stringify(accObj, replacer))

            
//         }
//     }


// var transactionMaker = function (object) {
//     return function (context) {
//         var replacer = function (key, val) {
//             if (typeof val === 'function') {
//                 return context[val()]
//             }
//             return val;
//         }
//         return JSON.parse(JSON.stringify(transactionObj, replacer))
//     }
// }



    
//     if (line[0] == 'Add') {
            
//             let template = accTemplateMaker(accObj)
//             let render = template(formateTransactionOrAcc)
//             accounts.push(render)
            
//         } else {
            
//         let template = transactionMaker(transactionObj)
//         let render = template(formateTransactionOrAcc)
//         transactions.push(render)
//         }
//     return [accounts,  transactions]

    


export default formate_data; 
