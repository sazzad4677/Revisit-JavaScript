var LANGUAGE = 'JAVA';
var language = 'Javascript'

function getLanguage() {
    if(!language){
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`) // I love JAVA
// cause of using var I got this unexpected output

//=======--------=========

let LANGUAGE1 = 'JAVA';
let language1 = 'Javascript'

function getLanguage1() {
    if(!language1){
        let language1 = LANGUAGE1;
    }
    return language1;
}

console.log(`I love ${getLanguage1()}`) // I love Javascript

// cause of using var is an global scope and let is an function scope
// When I write if(!language1) but it is not defined in this function, So the function returns language1 as usual.
// function declarations are physically moved to the top of "scope "

//=======--------=========
// in function hoisting works as usual 
myFunc()
function myFunc(){
    console.log(`I love JavaScript`) // I love JavaScript
}

//=======--------=========
myFunc2() // ReferenceError
const myFunc2 = function (){
    console.log(`I love JavaScript`)
}