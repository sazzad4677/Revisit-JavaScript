function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function() { // <------ closure
        return balance;
    };
}
var account = bankAccount(100000);
console.log(account()); //output: 100000

//However, printing balance will result in an error because balance is a private property of the bankAccount function.
//Because balance property only accessible only in the backAccount function
//In this way we can secure a property

console.log(balance); //output: Uncaught ReferenceError: balance is not defined