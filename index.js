const readlinesync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bgBlue('Check Your Birthday is prime or Not'))

console.log(chalk.red('-----------------------'));
let userName = readlinesync.question(chalk.green('May i know your name \n'));
console.log(chalk.red('-------------------- \n'));

let dateOfBirth = readlinesync.question(chalk.green(` hey ${userName} enter your birthday in DD/MM fromat  \n`));
console.log(chalk.red('-------------------- \n'));

getResult();

function getResult(){
    let  [dd, mm] = dateOfBirth.split("/");
    let joinDate = Number(dd+mm);

 if(dateOfBirth === ("potato").toLowerCase()){

      console.log(chalk.bgRed("you have entered potato please enter date format in correct way"))
    }

     
    if(Number(dd)>31 || Number(mm)>12){
      
       console.log(chalk.bgRed('Date format is wrong'));
      
      }else if(Number(mm)=== 2){
         if(Number(dd)>29){
            console.log('this month cant have an more than 29 days')
        }else{
          checkPrimeNo(joinDate);
        }
      }else{
        checkPrimeNo(joinDate);
      }


}


function checkPrimeNo(joinDate){
  
  let isPrime='false';
  if(joinDate ===1){
    console.log(chalk.bgGreen('it is not a prime and composite '))
  }

   for(let a=2; a<joinDate; a++){
       if(joinDate%a===0){
         isPrime='true';
         break;
       }
   }

   if(isPrime === 'true'){
     console.log(chalk.red('Your birthdate is not prime no'))
   }else{
     console.log(chalk.green('Your birthdate is  prime no'));
   }
}

//check 17/09 



