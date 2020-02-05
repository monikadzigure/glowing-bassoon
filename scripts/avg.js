function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}

function getAverage(numThrows) {
    //write function to get an average value from dice throws
   let total=0;
   //write loop here
   //use randomRange(1,6);
   //loop goes here
var myTrows;
for(let i=0; i< numThrows; i++){
    total +=randomRange(1,6);
}
   
   randomRange(1,6);
   total
   return total/numThrows;

    return 3.5;
    
}

let result = getAverage(1000);

let myParagraph = document.querySelector("#answer");
myParagraph.textContent = `Average throw value is ${result}`;
