var printName = function () {
    console.log(this.name)
};
var printVirtu = function (v1, v2) {
    console.log(`${this.name} is ${v1}, ${v2}`)
}
var sakib = {
    name: "Sakib",
    age: 30,
};

var v1 = 'Handsome';
var v2 = 'All-rounder';
 
var v = [v1, v2];

printName.call(sakib);

// call with parameters
printVirtu.call(sakib, v1, v2);

// apply 
printVirtu.apply(sakib, v)

// bind
var newFunc = printVirtu.bind(sakib, v1, v2);
newFunc();