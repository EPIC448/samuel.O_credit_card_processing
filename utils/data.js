


import { default as valid_credit_card } from '../utils/luhn.js'
import { default as fs } from 'fs'

function formate_data(data, accounts = [], transactions = []) {
    let line = data.toString().trim().split(' ')
    /* line =  Add john 213123123 $3233434  
    console.log(line[0])   //Add     
    console.log(line[2])   //213123123     
    

    name of person = person_name
    */
    let person_name;
    let limit;
    let account_number;
    let amount;
    let verified;
    
    const remove$ = (str) => {
       return  str.replace('$', '')
        
    }

    let formateTransactionOrAcc = {
        person_name: "",
        acount_number: 0,
        limit: 0,
        amount:0,
        verified: ''
          
    }
    let accObj = {
        person_name : line[1],
        account_number : line[2],
        limit : parseInt(remove$(line[3])),
        amount : 0,
        verified : valid_credit_card(line[2])
    }
    
    let transactionObj = {
        type: line[0],
        person_name: line[1],
        amount: parseInt(line[2])      
    }
    
    
    var accTemplateMaker = function (object) {
        return function (context) {
            var replacer = function (key, val) {
                if (typeof val === 'function') {
                    return context[val()]
                }
                return val;
            }
            return JSON.parse(JSON.stringify(accObj, replacer))
        }
    }


var transactionMaker = function (object) {
    return function (context) {
        var replacer = function (key, val) {
            if (typeof val === 'function') {
                return context[val()]
            }
            return val;
        }
        return JSON.parse(JSON.stringify(transactionObj, replacer))
    }
}



    
    if (line[0] == 'Add') {
            
            let template = accTemplateMaker(accObj)
            let render = template(formateTransactionOrAcc)
            accounts.push(render)
            
        } else {
        let template = transactionMaker(transactionObj)
        let render = template(formateTransactionOrAcc)
        transactions.push(render)
        }
    console.log(accounts, transactions)
    return (accounts, transactions)

}// end of function


export default formate_data; 
