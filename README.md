# CreditCard Processing Assignemt


## Instructions

Assignment completed in Node v16.0.0,

No dependencies required 

```
# cd into the  rootfolder
 (cd/path/to/braintree/CREDIT-CARD-PROCESSING)
 
To Test The file.
  run "node test_luhn.js"
  
TO used the STDIN input-  run  
  node stdin_input.js

TO used the  input file built in-  run  
  node input.js
```

## Descisions
 Users are giving two file to excute "stdin_inputs" and "input.js"
 I was not sure if I were to query the "input.txt" file for data data after using an input of "stdin".

so I query the "input.txt" file after every call  and store it a Object so that the Prototype function namely (AccountInfo.prototype.charge) & (AccountInfo.prototype.credit) inside of /utils/data.js can use it when the data is queried. 

 Using the Luhn algroalgorithem  verify the account number before it is created and it results is returned the function that calls it. 

- `readFile()` or 'rl' at "./stdin_inputs.js" file reads data from users inputs
- `format_data()` and `formate_data2()` formate the inputs from 'stdin_inputs' and 'input.js'  then parse the data to individual row s. The collected data are stored in an accounts as objects allowing for key ,value pairs so to query the data for later use.

#### Why I picked Javascript

- Javascript is the language that I have used the most over this last year
- It's not an easy language to write compared to python. 
- However, It's beautiful easy for anybody to understand the thought process on a basic level.

### Comments

- Transactions  uniquely identified by name person_name number instead of account number.
- Person_name was used because "name" in  javascript is deprecated.