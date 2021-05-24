# CreditCard Processing Assignemt


## Instructions

Assignment completed in Node v16.0.0,

No dependencies required 

```
# cd into the  rootfolder
 (cd/path/to/braintree/CREDIT-CARD-PROCESS/processing)
 run "node main.js"


To Test The file.
 (cd/path/to/braintree/CREDIT-CARD-PROCESS/tests)
  run "node test_luhn.js"
  


TO used the STDIN input-  run  
  node stdin_input.js

TO used the  input file built in-  run  
  node input.js
```

## descisions
 Use are giving two file to excute. stdin_inputs and input.js
 not sure If I was to query the input Txt data after everycall. 
so I query the data and store it a Object so that the Prototype function (AccountInfo.prototype.charge) & (AccountInfo.prototype.credit) can use it when the data is queried. 
 Using the Luhn algrothem to verify the account number before it is created. 

- `readFile()` Program reads data from file or STDIN 
- `format_data()` and `formate_data2()` Individual row from data are stored in an accounts as objects allowing for key ,value pairs so to query the data for later use.

#### Why I picked Javascript

- Javascript is the language that I have used the most over this last year
- It's not an easy language compared to python. 
- However, It's beautiful easy for anybody to understand the thought process on a basic level.

### Comments

- Transactions  uniquely identified by name person_name number instead of account number.
- Person_name was used because "name" in  javascript is deprecated.