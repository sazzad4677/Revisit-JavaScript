for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // output: After for loop 1 2 3 (After Three seconds)
    }, 3000);
    
}
console.log("After for loop") //output: After for loop

// but if we change let to var then same function will print 3 total three times
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // output: 3 (3 times will print 3)
    }, 3000);
    
}