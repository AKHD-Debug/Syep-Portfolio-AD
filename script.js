const reviews = [
    {
        id: 1,
        name: "John Doe",
        img: '#',
        text: "Excellent service and friendly staff!",
        date: "2023-10-01"
    },
    {
        id: 2,
        name: "Jane Smith",
        img: '#',
        text: "Very good experience, will come again.",
        date: "2023-10-02"          
    },
  {
        id: 1,
        name: "nohj Doe",
        img: '#',
        text: " friendly staff!",
        date: "2023-10-01"
    },
    


];



const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');
const date = document.getElementById('date');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    
});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
    date.textContent = item.date;
}



nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});



prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});











































// console.log("Hello, World!");
// let chcken = 123
// console.log(chcken);
// console.log(typeof chicken);
// console.log(10+" eggs")
// console.log(10 + 8 "eggs");
// console.log("eggs "+ 10 +8);
// console.log(6==7);
// console.log(6<7);
// console.log(7>3)&&(10>8);
// //Both Conditions Need to be true
// //only one condition must to be true
// console.log(10>3) || (5<10);

// //if the statement is logical or not
// console.log(!5>10);


// const hour = new Date().getHours();
// let greeting = "";
// if (hour < 12) {
//     greeting = "Good morning!`";
// } else if (hour < 18) {
//     greeting = "Good afternoon!";
// } else {
//     greeting = "Good evening!";
// }
// document.getElementById("greeting").innerText = greeting;