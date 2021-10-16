
const prompt = require('prompt-sync')();

console.log('Please enter your witdrawl amount.');

const amount = prompt();

console.log(`${amount}`);


function getBalance(){}

function withdrawFunds(){}

function depositFunds(){}

function validatePin(){}

module.export = {
    amount: getBalance,
    withdraw: withdrawFunds,
    deposit: depositFunds,
    vaidate: validatePin

}