// import { default as OrderedDict} from "collections/dict"
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { default as formate_data} from './data.js';

class CreditRecordsCollection {
    constructor(accountdata, person_name, account_number, limit, amount, verified) {
        this.hashMap = []
        accountdata.map(function (eachItem) {
           // Working and Getting the needed data
            person_name = eachItem[0].person_name
            account_number = eachItem[0].account_number
            limit = eachItem[0].limit
            amount = eachItem[0].amount
            verified = eachItem[0].verified
        })
    }
     // Create a new account and pass into HashMap
    addAccount =(typedInput) =>{
        this.hashMap.push(typedInput)
            return this.hashMap
    }
    
    charge = (person_name, amount) => {
        // Check if user accoun
        if (this.verified != true) return this.amount = 'error'
        if (this.amount + amount < this.limit && this.person_name == person_name) {
            this.hashMap.push(this.amount += limit)
        } else {
            return  // do nothing
        }
    }
     
    credit = (person_name,amount) => {
        if (this.verified != true) return this.amount = 'error'
        if (this.name == person_name) {
            this.hashMap.push(this.amount -= amount)
        }

    }

    _str_ = () =>{
        for(let i = 0; i< this.rear; i++){
            console.log(this.hashMap[i])
            // formate the data from here
        }
    
    }



    break;


   
    
    

    // }

    
    // process = (self, transctions) => {
    //     while (transctions) {
    //         transction = transctions.shif()
    //     }

    //     if (typeof transctions == 'Charge') {
    //         this.charge(transction)
    //     } else if (typeof transctions == 'Credit'){
    //         this.credit(transction)
    //     } else {
    //         return
    //     }
    // }
  

    // _str_ = (self) => {
    //     response = ""

    //     for (const key in self.data.items) {
    //         for (const value in key) {
                
    //             if (value['verified']) {
    //                 response += "{}: ${}\n".formate(key, value['amount'])
                    
    //             } else {
    //                 response += "{}: ${}\n".formate(key,'error')

    //             }
    //         }
    //         return process.stdout.write(response); 

    //     }
    // }

     
} // end of class


export default CreditRecordsCollection;

/// How we expor the Body of a class
// export default class CreditRecordsCollection {
//     // The body of class
//    }