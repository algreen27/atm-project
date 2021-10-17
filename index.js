const atm = require('./atm');

const prompt = require('prompt-sync')();


function checkMenu(menu){
    console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit.');
    return option;
    
}

let option = prompt(); 

 
switch(option){
    // check balance
    case '1':
    // call function to check
    atm.gb;
    break;
    case '2':
    // call function to withdraw
    atm.wf;
    break;
    case '3':
    // call function to deposit
    atm.df;
    break;
    case '4':
    //check for valid PIN
    atm.val;
    break;
    default:
    // restart
    checkMenu(menu);
    break;
 
}
