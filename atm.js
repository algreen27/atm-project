// As a customer, I want to continue using the ATM until I choose an “exit” option.
// As a developer, I want to account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary.
// As a developer, I want my atm.js file to contain the following functions:
// •	getBalance
// •	withdraw
// •	deposit
// •	validatePin

const account = require('./account');
const prompt = require('prompt-sync')();



function addTwoNumbers(numberOne, numberTwo){
    let sum = numberOne + numberTwo;
    return sum;
}

function subtractTwoNumbers(numberOne, numberTwo){
    let diff = numberOne - numberTwo;
    return diff;
}

function validatePin(numberOne){
    let pinNumber = numberOne;
    if(pinNumber == account.pin){
        console.log('PIN Accepted')
           
    }
    else{
        console.log('Invalid, please try again');
        // validatePin(validate);
        console.log('Please enter your PIN.');
        let pinNumber = prompt(); 
        validatePin(pinNumber); 
    }
    
}

function getBalance(){ 
    let available = account.bal
    return available;
    // console.log(available);

}

function withdrawFunds(numberOne){
    let takeOut = account.bal- numberOne;
    console.log(takeOut);
}

function depositFunds(numberOne, numberTwo){
    let putIn = putIn + account.bal;
    return putIn;

}




module.exports = {
    add: addTwoNumbers,
    subtract: subtractTwoNumbers,
    gb: getBalance,
    wf: withdrawFunds,
    df: depositFunds,
    val: validatePin
}
