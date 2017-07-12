// console.log("Sky is not normal");
// console.log("How are you doing today?");

function rand(num) {
    // Generates a random number between 0 and whatever you are choosing.
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}

rand(96)
rand(496)
rand(2039)
