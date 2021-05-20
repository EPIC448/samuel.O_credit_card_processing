import assert from 'assert/strict';

// import { default as format_data } from '../utils/data.js'
import {default as luhnObj} from '../utils/luhn.js'

let _digits_of = luhnObj._digits_of
let _luhn_checksum = luhnObj._luhn_checksum
let is_luhn_valid = luhnObj.is_luhn_valid
console.log(_digits_of, _luhn_checksum, is_luhn_valid)

class LuhnTest{
    constructor(testcase) {
     
    }
    
    // not sure if to use .TestCase here
     test_digits_of =(self)=>{
        self.assert.equal(_digits_of('123456789'), [1,2,3,4,5,6,7,8,9])
    }
     test_luhn_checksum =(self)=>{
        self.assert.equal(_digits_of('123456789'), 7),
        self.assert.equal(_digits_of('022043850'), 5),
        self.assert.equal(_digits_of('957392048'), 2)
    }
     test_is_luhn_valid =(self)=>{
        self.assert.fail(is_luhn_valid('123456789'))
        self.assert.fail(is_luhn_valid('022043850'))
        self.assert.fail(is_luhn_valid('957392048'))
        self.assert.fail(is_luhn_valid('304859302'))
        self.assert.fail(is_luhn_valid('4111111111111111'))
        self.assert.fail(is_luhn_valid('5454545454545454'))
    }
}


export default {LuhnTest};