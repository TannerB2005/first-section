/*
//Excercise 1: Hello, World!
console.log("Hello, World!");

//Excercise 2: Variables
let myName = "Tanner";
let myAge = 18;
console.log(myName);
console.log(myAge);

//Excercise 3: Area of a rectangle
let length = 5;
console.log("length of rectangle is " + length);
let width = 4;
console.log("width of rectangle is " + width);
let area = length * width;
console.log("area of rectange is " + area);

//Excercise 4: Conditional statements
n = 5;
if (n % 2 == 0) {
    console.log("n is even");
} else {
    console.log("n is odd");
}
//Excercise 5: Loops
for (let i = 1; i < 11; i++) {
    console.log(i);
}
*/
//Excercise 6: Personalised greeting
const name = prompt("Enter your name: ");

if (name == 'Tanner' || name == 'tanner') {
    alert("Hello, Tanner!");
} else if (name == 'Cattron' || name == 'cattron') {
    console.log('this is cattron');
    alert('You are not Tanner, you are Cattron, An awesome teacher!');
} else {
    console.log('not tanner');
}




