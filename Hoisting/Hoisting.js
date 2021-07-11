// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

//==========-----===========
console.log(b); // undefined
var b;
b = "bangladesh"
console.log(b) //Bangladesh

//==========-----===========
console.log(a); // reference error

//==========-----===========

// However, if I use let, the error will be changed because let is defined in the assigned line.
console.log(c) //reference error
let c = "Bangladesh"; 

//==========-----===========
let d;
console.log(d) // undefined