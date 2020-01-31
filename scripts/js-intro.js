console.log("Hello my first JS script!");
let myStr = "Just some string";

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
