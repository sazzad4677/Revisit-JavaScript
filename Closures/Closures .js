// simple Closures  example

//Closures are function that refer to the independent variables (variables that are used locally, but defined in an enclosing scope)
// In Other words these function 'remember' the environment in which they are created

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
