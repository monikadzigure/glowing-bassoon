"use strict";
// myGlobal = [33, 34, 2, 432];
// console.log(myGlobal);

let myState = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function main() {
    //our main work is done here
    console.log("Started main function");
    config();
    //work work work
    play();
    //cleanup
    //done
}

function functionWithArgs(a, b) {
    let myLocalFunctionVar = a + b + 36;
    console.log(a + b);
    console.log(myLocalFunctionVar);
    //myLocalFunctionVar is gone here
}

function config() {
    console.log("Configuring stuff");
}

function play() {
    console.log("Playing");
    // console.log(myState);
    functionWithArgs(5, 11);
    functionWithArgs("Valdis", " Saulespurens");
}

main();
