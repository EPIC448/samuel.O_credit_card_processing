 To run the Files.. you must get to it diretory. 
  to run main.js
  you must be in the ./processing directory

   run
   "node stdin_input.js"

   to enter your input.

   or 
   Run 
   "node input.js"
   to run pre-load input


  USed javascript try...catch... finally  statement

  Runing Test with [Still debugging]
  node test_main.js

   HOW USE IMPORT INFORMARTION
   node app.js < input.txt


AccountTemplate = {
    Person_name,
    account_number,
    limit,
    amount,
    verified
}
TransactionTemplate = {
    Transactions,
    type,
    person_name,
    amount,
    
}


---- What I Want my Out to spit out after createion form classs.. .
... woroking

let value1 = [
  {
    person_name: 'Tom',
    account_number: '4111111111111111',
    limit: 1000,
    amount: 0,
    verified: true
  },
  {
      person_name: 'Better',
    account_number: '41111111111',
    limit: 4000,
    amount: 0,
    verified: false
    },
      {
      person_name: 'Lisa',
    account_number: '434234235',
    limit: 900,
    amount: 0,
    verified: true
    }
]
 const parseAccountJson = (hashData) =>{
let sortHash = []

hashData.map((nestedObject) => {
  
  if(typeof nestedObject.person_name != 'undefined')
  sortHash.push(nestedObject)
  })
  
  let result = sortHash.map(function(each_account, index){
    // console.log (each_account.person_name)
       return (` ${each_account.person_name}: ${each_account.limit}`)

    })
 console.log(result)
 
 }
 
// [ ' Tom: 1000', ' Better: 4000', ' Lisa: 900' ]