const account = require('./account');
const atm = require('./atm');

const prompt = require('prompt-sync')({sigint: true});


console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. 4. Check PIN ');
let option = prompt(); 



function checkMenu(){
    var menuItem = option;
    switch(menuItem){
    // check balance
        case '1':
    // call function to check balance
    // atm.gb;
    // console.log(account)
            console.log('Your account balance is' + ' ' + account.bal);
            console.log('Would you like another transaction? 1 yes, 2 no.');
            let chooseAgain = prompt();
            if(chooseAgain == '1'){
                console.log('Please enter the number for the option. \n 1 Check Balance.\n 2 Withdraw. \n 3 Deposit. \n 4. Check PIN ');
                let option = prompt(); 
                var menuItem = option;
                checkMenu();  
            }     
            else if(chooseAgain == '2'){
            
                //how to exit
            }
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
            checkMenu();
        break;
    }
}

checkMenu;