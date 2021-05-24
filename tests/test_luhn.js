import assert from 'assert/strict';
import { default as format_data } from '../utils/data.js'
import {default as test} from '../tests/test.js'
const { valid_credit_card,add } = import('../utils/luhn.js');
const { AccountInfo } = import('../utils/data.js');

test('should add two numbers', () => {
    console.log('tests1')
    assert.equal(add(1,2), 3)
})

test('should true if account number is valid else false', () => {
    console.log('tests2')

    assert.fail((valid_credit_card('123456789') ), false, 'accountNumber no valid', '=') // want to return true
    assert.fail((valid_credit_card('022043850') ), false, 'accountNumber no valid', '=') // want to return false
    assert.equal((valid_credit_card('4111111111111111') ),true, 'accountNumber is valid') // want to return false
})

test("AccountInfo should return person_name = string, account_number = digits, limit = digit, balance = string", () => {
   let newAcc =  AccountInfo(person_name = "steve", account_number = "433423423", limit = "$232312", balance = 0)
    
    switch (newAcc) {
        case 1: assert.equal((typeof newAcc.person_name), string)
         case 2: assert.equal((typeof newAcc.account_number), string)
         case 3: assert.equal((typeof newAcc.limit), number)
        case 4: assert.equal((typeof newAcc.balance), string)
    }

})
