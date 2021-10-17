// As a customer, I want to continue using the ATM until I choose an “exit” option.
// As a developer, I want to account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary.
// As a developer, I want my atm.js file to contain the following functions:
// •	getBalance
// •	withdraw
// •	deposit
// •	validatePin

const account = require('./account')

function addTwoNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtractTwoNumbers(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function validatePin(validate){
    if(userInput = account.pin){
        return true;
    }else{
        console.log('Invalid, please try again');
        validatePin();
    }  
}

function getBalance(amount){
    let balance =+ sum;
}

function withdrawFunds(){}

function depositFunds(){}




module.exports = {
    add: addTwoNumbers,
    subtract: subtractTwoNumbers,
    gb: getBalance,
    wf: withdrawFunds,
    df: depositFunds,
    val: validatePin
}

