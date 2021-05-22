// import { default as OrderedDict} from "collections/dict"
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { default as formate_data} from './data.js';

//Turn Class into a function
function credit_Card_Inforamtion(accountData) {
    accountData.map(function (eachItem) {
        for (const key in eachItem) {
            if (Object.hasOwnProperty.call(eachItem, key)) {
                
                const element = eachItem[key];

                 console.log(element.type) // Return type of Add or Charge...
                if (element.type == 'Add') {
                    // call createAccount function(person_name, account_number....)
                    Account(element.person_name,element.account_number, element.limit, element.amount, element.verified)
                     
                } else if(element.type == 'Charge') {
                    Account.prototype.charge(element.person_name, element.amount)
                } else if (element.type == 'Credit') {
                    Account.prototype.credit(element.person_name, element.amount)


                } else {
                    return 'got nothing for you'
                }
            }
        }    
    })
}
const storeAccountInfor = [] // Store Created account Information

function Account(person_name,account_number,limit,amount,verified){
    person_name = person_name;
    account_number = account_number;
    limit = limit;
    amount = amount;
    verified = verified;
    storeAccountInfor.push([person_name,account_number,limit,amount,verified])
}

// Working 
Account.prototype.charge = function (person_name, amount) {

    if (this.verified != true) return this.amount = 'error'
    if (this.amount + amount < this.limit && this.person_name == person_name) {
        return this.amount += limit
    } else {
        return  // do nothing
    }
}
    //  working
Account.prototype.credit = function (person_name,amount) {
        if (this.verified != true) return this.amount = 'error'
        if (this.name == person_name) {
           return [this.amount -= amount]
        
    }
}


export default credit_Card_Inforamtion;


const a = new Account('Tom', 88888888, '5245',0,true)
a.charge(245)
process.stdout.write(`
(${a.name}, ${a.balance}),

`); 

/*
class CreditRecordsCollection {
    newAcctCollection = []
    transcationsCollection = []

    constructor(accountdata) {
        
        
    }


           // Working and Getting the needed data
            
            // person_name = eachItem[0].person_name
            // account_number = eachItem[0].account_number
            // limit = eachItem[0].limit
            // amount = eachItem[0].amount
            // verified = eachItem[0]
    //  // Create a new account and pass into HashMap
    // addAccount =(typedInput) =>{
    //     this.acctHashMap.push(typedInput)
    //         return this.acctHashMap
    // }
    
    
     
    
    

    //  Ho I will formate the Data
    _str_ = () => {
    //     let response = ""
    //     // if  data is verified, we will print out the acount if note,we use  the other print
    //     for(let i = 0; i< this.rear; i++){
    //         console.log(this.hashMap[i])
    //         // formate the data from here
    //     }
    //     for(let i = 0; i< this.rear; i++){
    //         console.log(this.hashMap[i])
    //         // formate the data from here
    //     }
    
    // }


    
     
} // end of class


*/



