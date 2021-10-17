const account = require('./account');
const atm = require('./atm');

const prompt = require('prompt-sync')();


console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. \n 4. Check PIN ');
let option = prompt(); 


function checkMenu(){
    let menuItem = option;
    switch(menuItem){
    // check balance
        case '1':
    // call function to check balance
            console.log('Your account balance is' + ' ' + account.bal);
            console.log('Would you like another transaction? 1 yes, 2 no.');
            let chooseAgain = prompt();
            if(chooseAgain == '1'){
                console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. \n 4. Check PIN ');
                let option = prompt(); 
                // let menuItem = option;
                checkMenu();  
            }     
            else if(chooseAgain == '2'){
                console.log('Have a nice day!')
            
                //how to exit
            }
        break;
        case '2':
        // call function to withdraw
            console.log('Please enter withdrawl amount. \n 20 \n 40');
            let option = prompt();
            let draw = option;
            atm.wf(draw);
            console.log('Would you like another transaction? 1 yes, 2 no.');
            let chooseAgain2 = prompt();
            if(chooseAgain2 == '1'){
                console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. \n 4. Check PIN ');
                let option = prompt(); 
                // let menuItem = option;
                checkMenu();
            }
            else if(chooseAgain2 == '2'){
                console.log('Have a nice day!');
                         
                //how to exit
            }      
        break;
        case '3':
        // call function to deposit
            console.log('Please enter deposit amount. \n 20 \n 40');
            let option3 = prompt();
            let input = option3;
            atm.df(input);
            console.log('Would you like another transaction? 1 yes, 2 no.');
            let chooseAgain3 = prompt();
            if(chooseAgain3 == '1'){
                console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. \n 4. Check PIN ');
                let option = prompt(); 
                // let menuItem = option;
                checkMenu();
            }
        
            else if(chooseAgain3 == '2'){
                console.log('Have a nice day!');
                //how to exit
            }       
        break;
        case '4':
            console.log('Please enter your PIN.');
            let number = prompt(); 
            let pinNumber = parseInt(number);
            atm.val(pinNumber);

        default:
        // restart
            checkMenu();
        break;
    }
}

checkMenu();