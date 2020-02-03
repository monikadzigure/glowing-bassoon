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

function config() {
    console.log("Configuring stuff");
}

function play() {
    console.log("Playing");
    console.log(myState);
    myState[0][2] = "X";
    console.log(myState);
}

main();
