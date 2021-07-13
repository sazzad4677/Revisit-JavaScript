//Higher order function

function hello() {
   return function () {
    console.log(`Hello World!`);
   }
}
hello()();

// example 1 (without higher order function)
var numbers = [1,2,3]
var result = [];

for (var i = 0; i < numbers.length; i++){
    result.push(numbers[i] * 2);
}
console.log(result) //[ 2, 4, 6 ]

// example 1 (with higher order function)
var newNumbers = [1,2,3]
var result = newNumbers.map((newNumber) => newNumber*2);

console.log(result) // [ 2, 4, 6 ]

//example 2 (without higher order function)
var players = [
    {
        name: 'Sakib',
        avg: 38.25
    }, 
    {
        name: 'Tamim',
        avg: 33.25
    },
    {
        name: 'Musfiq',
        avg: 36.25
    },
    {
        name: 'Tamim',
        avg: 34.25
    },
];
var playersWithAvgThirtyFour = [];
for (var i = 0; i < players.length; i++){
    if (players[i].avg >= 34 ) {
        playersWithAvgThirtyFour.push(players[i]); 
    }
}
console.log(playersWithAvgThirtyFour)
// output: [
//     { name: 'Sakib', avg: 38.25 },
//     { name: 'Musfiq', avg: 36.25 },
//     { name: 'Tamim', avg: 34.25 }
//   ]


// example 2 (with higher order function)

var playersWithHOF = [
    {
        name: 'Sakib',
        avg: 38.25
    }, 
    {
        name: 'Tamim',
        avg: 33.25
    },
    {
        name: 'Musfiq',
        avg: 36.25
    },
    {
        name: 'Tamim',
        avg: 34.25
    },
];
var playersWithFilter= playersWithHOF.filter((player) => player.avg >= 34);

console.log(playersWithFilter) 

// output: [
//     { name: 'Sakib', avg: 38.25 },
//     { name: 'Musfiq', avg: 36.25 },
//     { name: 'Tamim', avg: 34.25 }
//   ]


// example 3 (Custom higher order function)

const languages = ["javascript","Python","PHP","C"];
function newMap (arr,fn){
    const newArray = [];

    for (let i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i]));
    }

    return newArray;
}

const myArray = newMap(languages, function(language){
    return language.length;
});

console.log(myArray)