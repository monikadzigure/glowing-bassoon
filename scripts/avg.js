function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}

function getAverage(numThrows) {
    //write function to get an average value from dice throws
    return 3.5;
}

let result = getAverage(1000);

let myParagraph = document.querySelector("#answer");
myParagraph.textContent = `Average throw value is ${result}`;
