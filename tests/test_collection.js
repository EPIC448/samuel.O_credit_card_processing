
// import {default as luhnObj} from '../utils/luhn.js'

// console.log(luhnObj._luhn_checksum)
// // console.log(_luhn_checksum)
// // console.log(is_luhn_valid)


import { default as  assert } from 'assert/strict';

import CreditRecordsCollection from '../utils/collection.js';
import {  Account, Transaction } from '../utils/data.js'
 
class CollectiveTest{
 orderedDict = []
    setUp = (self) => {
        this.verified_account = this.orderedDict.push([
            Account(
                person_name = 'John',
                account_number = '123456789',
                limit = 1000,
                amount = 0,
                verified=True
            )
        ])
    }
    unverified_account = this.orderedDict.push([
        Account(
            person_name = 'John',
            account_number = '123456789',
            limit = 1000,
            amount = 0,
            verified=false
        )
    ])

    test_initialize_collection(self) {
        this.collection = CreditRecordsCollection(account = this.verified_account)
        self.assert.equal(collection.data['John']['amount'], 0),
        self.assert.equal(collection.data['John']['verified'], True)
            
    }

    test_charge_account(self) {
        transactions = this.orderedDict.push([
            Transaction(
                type = 'Charge',
                person_name = 'John',
                amount= 500
            )
        ])
        collection = CreditRecordsCollection(account = self.verified_account);
        collection = process.on(transactions = transactions)
    
       return self.assert.equal(collection.data['Sam']['amount'], 500)
    }

    test_credit_account(self) {
        transactions = this.orderedDict.push([
            Transaction(
                type = 'Charge',
                pereson_name = 'John',
                amount= 500
            )
        ])
        collection = CreditRecordsCollection(account = self.verified_account);
        collection.process.on(transactions = transactions)
    
       return self.assert.equal(collection.data['Sam']['amount'], -500)
    }

    test_charge_over_limit(self) {
        transactions = this.orderedDict.push([
            Transaction(
                type = 'Charge',
                person_name = 'John',
                amount= 500
            )
        ])
        collection = CreditRecordsCollection(account = self.verified_account);
        collection.process.on(transactions = transactions)
    
      return self.assert.equal(collection.data['Sam']['amount'], 0)
    }

    test_account_verification_error(self) {
        transactions = this.orderedDict.push([
            Transaction(
                type = 'Charge',
                person_name = 'John',
                amount= 500
            )
        ])
        collection = CreditRecordsCollection(account = self.verified_account);
        collection.process.on(transactions = transactions)
    
      return  self.assert.equal(collection.data['Sam']['amount'], 'error')
    }

}

export default CollectiveTest; Account; Transaction;



/*
For CreditRecordsCollection
 constructor(
     input-- - Add steve 411111111111111 $23525
 )
outpust--- steve 411111111111111 23525 0 error

*/