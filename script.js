console.log("Hello, World!");
let chcken = 123
console.log(chcken);
console.log(typeof chicken);
console.log(10+" eggs")
console.log(10 + 8 "eggs");
console.log("eggs "+ 10 +8);
console.log(6==7);
console.log(6<7);
console.log(7>3)&&(10>8);
//Both Conditions Need to be true
//only one condition must to be true
console.log(10>3) || (5<10);

//if the statement is logical or not
console.log(!5>10);


const hour = new Date().getHours();
let greeting = "";
if (hour < 12) {
    greeting = "Good morning!`";
} else if (hour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
document.getElementById("greeting").innerText = greeting;