// import { default as OrderedDict} from "collections/dict"
// var Deque = require("collections/deque");
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

class CreditRecordsCollection {
     orderedDict = []

    init = (self, accounts) =>{
       this.orderedDict =  self.data 
        this.initialize_accounts(accounts = accounts)

    }

    initialize_accounts = (self, accounts) => {

        while (accounts) {
            account = accounts.shift()
            this.add(account)
            orderedDict.push(
                     OrderedDict.sort(function (items) {
               return  key = item[0]
                })
            )
        }
    }

    add = (self, account) => {
        let dict = new Object();
        self.data[account.name] = dict
            dict = {
            account_number: account.account_number,
            limit: account.limit,
            amount: account.amount,
            verified: account.verified,
        };
    }
    
    charge = (self, transaction) => {
        if (!self.is_holder_verified(transaction.name)) {
             self.data[transaction.name]['amount'] = 'error'
        } else if (
            (self.data[transaction.name]['amount'] + transaction.amount) <
            self.data[transaction.name][limit]
        ) {
            self.data[transaction.name]['amount'] += transaction.amount
            
        }
        else {
            //pass  //Limit reached, dont charge account. 
        }
    }
    
    credit = (self, transaction) => {
        if (!self.is_holder_verified(transaction.name)) {
            self.data[transaction.name]['amount'] = 'error'
        } else {
            self.data[transaction.name]['amount'] -= transaction.amount
        }
        

    }

    is_holder_verified = (self, name) => {
        return self.data[name]['verified']
    }

    process = (self, transctions) => {
        while (transctions) {
            transction = transctions.shif()
        }

        if (typeof transctions == 'Charge') {
            this.charge(transction)
        } else if (typeof transctions == 'Credit'){
            this.credit(transction)
        } else {
            return
        }
    }
  

    _str_ = (self) => {
        response = ""

        for (const key in self.data.items) {
            for (const value in key) {
                
                if (value['verified']) {
                    response += "{}: ${}\n".formate(key, value['amount'])
                    
                } else {
                    response += "{}: ${}\n".formate(key,'error')

                }
            }
            return process.stdout.write(response); 

        }
    }

     
} // end of class

export default{CreditRecordsCollection };