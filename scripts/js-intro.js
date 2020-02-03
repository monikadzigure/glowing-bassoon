console.log("Hello my first JS script!");
let myStr = "Just some string";

let myArr = [1, 2, 3, 5, 6];
let myNum = myArr[3];
let myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
console.log(myArray[3][2]);
myArray.push();

console.log(myArr.slice(3));
console.log(myArr);
console.log(myNum);
// new style String interpolation with backticks
console.log(`My string is: ${myStr} and its length is ${myStr.length}`);
// this is just a commment
// fakdlfajdlajfda;
var mynewvar;

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
    let name = prompt("Enter a new name");
    para.textContent = "Player 1: " + name;
}
