// ================================ 1. Var ====================================================
 function varVariable() {
    // Var is a global scope in Javascript.
    if(true){
        var varVariable = "this is var";
    }
    console.log(varVariable); // output: this is var
    
    // Var could be initialize as many times as I like.
    if(true){
        var varVariable = "this is var again";
    }
    
    // the same variable, but with a different result
    console.log(varVariable); // output: this is var again
 }


//================================ 2. Let ====================================================
function letVariable(){
    
// Let is a block scope in Javascript. But let cannot be initialized again with same variable name. 
if (true) {
    let letVariable = "this is let variable";
    console.log(letVariable); // output: this is let variable
}
console.log(letVariable); // output: undefined

// Let cannot be initialized again with same variable name. 
if (true) {
    let letVariable = "this is let variable";
    let letVariable = "this is let variable again";
    console.log(letVariable); // output: SyntexError: letVariable variable already been declared
}

// Let cannot be re-initialized with the same variable name, but the value of the variable can be reassign if I would like.. 
if (true) {
    let letVariable = "this is let variable";
    letVariable = "this is let variable again";
    console.log(letVariable); // output: this is let variable again
}
}

//================================ 3. Const ====================================================
function constVariable(){
    // Const same as Let but the value of the variable cannot be reassign
    if (true) {
        const constVariable = "this is const variable";
        constVariable = "this is const variable again";
        console.log(constVariable); // output: Assignment to constant variable.
    }
    // Const let you update the object data but cannot be reassign/redeclare with same variable name
    if (true) {
        const constVariable = {
            name: "javascript",
            version:"2015"
        } 
        constVariable.name = js;
        console.log(constVariable) //{"name":"js", "version":"2015"}
    }
}

//function call
varVariable()
letVariable()
constVariable();
