"use strict"; // lift default behavior
var PrintName = function() {
    console.log(this.name) // without use strict output: undefined, with use strict output: error 
}
var sakib = {
    name:' Sakib'
};

PrintName()