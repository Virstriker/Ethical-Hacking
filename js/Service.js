let cont1 = document.getElementById("container1");
let cont2 = document.getElementById("container2");

let box1 = document.getElementById("box101");
let box2 = document.getElementById("box102");
let box3 = document.getElementById("box103");
let box4 = document.getElementById("box104");
let box5 = document.getElementById("box105");

let Lside1 = document.getElementById("part1");
let Lside2 = document.getElementById("part2");
let Lside3 = document.getElementById("part3");
let Lside4 = document.getElementById("part4");
let Lside5 = document.getElementById("part5");

let Rside1 = document.getElementById("part101");
let Rside2 = document.getElementById("part102");
let Rside3 = document.getElementById("part103");
let Rside4 = document.getElementById("part104");
let Rside5 = document.getElementById("part105");

cont2.style.display = "none";
Rside1.style.display = "none";
Rside2.style.display = "none";
Rside3.style.display = "none";
Rside4.style.display = "none";
Rside5.style.display = "none";

function secondDisplay(){
    cont1.style.display = "none";
    cont2.style.display = "flex";
}
function p1(){
    Rside1.style.display = "block";
    Rside2.style.display = "none";
    Rside3.style.display = "none";
    Rside4.style.display = "none";
    Rside5.style.display = "none";
}
function p2(){
    Rside2.style.display = "block";
    Rside1.style.display = "none";
    Rside3.style.display = "none";
    Rside4.style.display = "none";
    Rside5.style.display = "none";
}
function p3(){
    Rside3.style.display = "block";
    Rside2.style.display = "none";
    Rside1.style.display = "none";
    Rside4.style.display = "none";
    Rside5.style.display = "none";
}
function p4(){
    Rside4.style.display = "block";
    Rside2.style.display = "none";
    Rside3.style.display = "none";
    Rside1.style.display = "none";
    Rside5.style.display = "none";
}
function p5(){
    Rside5.style.display = "block";
    Rside2.style.display = "none";
    Rside3.style.display = "none";
    Rside4.style.display = "none";
    Rside1.style.display = "none";
}
