// Spend $1000
// Balance = $1000
// Keep track of balance
// While balance is more than $0, continue prompting how much you are going to spend

var prompt = require('prompt-sync')();

//var hasDog = false;
//while (hasDog == false){
  //  var response = prompt("Do you have a dog?")


//if (response == "yes"){
 //   hasDog = true;
//}
//}

var balance = 1000;
while (balance > 0){
    var spent = prompt ("What do you want to buy? ");

while (spent > balance) {
    spent = prompt("That's too much money. Your balance is " + balance + ". Pick something different to buy.")
}

    balance = balance - spent
    console.log("Your balance is " + balance)
}

// Have 1000
// Computer will prompt how much you would like to spend
// Spends 200
// Have 800
// Computer will prompt again how much you would like to spend
// Spends 600
// Have 200
// Computer will prompt again
// Spends 200
// Balance is not greater than 0, 0 = 0
// Computer will not prompt again








