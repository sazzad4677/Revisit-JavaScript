// real-world example of why js uses closure

function stopWatch() {
    var startTime = Date.now();
    
    function getDelay() {
        console.log(Date.now() - startTime);
    }
    return getDelay;
}
var timer = stopWatch(); 

// fake delay
for (var i = 0; i <1000000000; i++) {
    var a = Math.random() * 100000000;
}


timer(); // Js is still unsure if I will use this function again. As a result, js will remember the function until I dump it.

console.dir(timer)

// now i manually dump timer let's see what happens
timer = null;

timer() // output: Reference error .

// ( Because the timer was manually dumped, JS now knows it will not be used again, so JS dumped the function and removed it from the closure.)