const reviews = [{
  id: 1,
  name: "Jayden_paulino",
  img: 'Jayden paulino.jpg',
  text: "Akheel is a great great person. He is very friendly and helpful. and he is great to work with and he is very knowledgeable about his work and explains thing throughly. .",
  date: "2023-10-01"
},

    {
        id: 2,
        name: "Jayleen brunson",
        img: 'Jayleen brunson.jpg',
        text: "Akheel is a cool person to work with, hes freindly and nonetheless helpful. he picks up on things quickly and he adjust's to new things with ease. he is also a strong witted person which heps him in challenging situations.",
        date: "2023-10-02"          
    },
  {
        id: 3,
        name: "Change bruno",
        img: 'Change.jpg',
        text: " Akheel is a very helpful person, he is very friendly and he is great to work with. He is very knowledgeable about his work and helps alot of people with their work. He is also very good at explaining things and he is very patient with people who are new to the work.",
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
//     greeting = "Good morning!";
// } else if (hour < 18) {
//     greeting = "Good afternoon!";
// } else {
//     greeting = "Good evening!";
// }
// document.getElementById("greeting").innerText = greeting;