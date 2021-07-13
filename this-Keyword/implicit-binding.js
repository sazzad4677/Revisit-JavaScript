// implicit binding
// explicit binding
// new binding
// window binding

//=============----============
// implicit binding
var sakib = { 
    name:'Sakib',
    age:40,
    printPlayerName: function() {
        console.log(this.name);
    }
}
sakib.printPlayerName();

var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function() {
        console.log(this.name);
    }

};
var tamim = {
    name:'tamim',
    age:40,
}
var masrafi = {
    name:'masrafi',
    age:40,
}

printPlayerNameFunction(tamim);
printPlayerNameFunction(masrafi);

tamim.printPlayerName();
masrafi.printPlayerName();

var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father:{
            name: 'Mr X',
            printName: function(){
                console.log(this.name);
            }
        }
    }
};
var mustafiz = Person('mustafiz',35);
mustafiz.printName();
mustafiz.father.printName();