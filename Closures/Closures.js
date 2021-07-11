// simple Closures  example

//Closures are function that refer to the independent variables (variables that are used locally, but defined in an enclosing scope)
// In Other words these function 'remember' the environment in which they are created

// simply closure is a function that remember some values
//================----------================
//parent scope
var num1 = 5; // <---- global scope because num1 not defined in an enclosing scope

//child scope
var sum = function () {
  var num2 = 6; // <---- Closures  because num2 defined in an enclosing scope
  return function () {
    return num1 + num2;
  };
};
console.dir(sum());

//================----------================
(function () {
  var num1 = 5; // <---- The same variable, but it's a closure because num1 is currently in an enclosing scope.

  var sum = function () {
    var num2 = 6; // <---- Closures  because num2 defined in an enclosing scope
    return function () {
      return num1 + num2;
    };
  };
  console.dir(sum());
})();

//================----------================

(function () {
  var num1 = 2;
  var num2 = 3;

  var sum = function () {
    return num1 + num2;
  };

  console.log(sum()); // output: 5;
  console.dir(sum); // <---- closure value num1 = 6 & num2 = 5 because closure did not store the exact value, it instead stored the variable's reference.
  num1 = 6;
  num2 = 5;

  console.log(sum()); // output: 11;
  console.dir(sum); // <---- closure num1 = 6 & num2 = 5; 
})();