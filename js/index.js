// Your code goes here

// 1-2
// change background color when mouse goes over the p section
let pTagIn = document.querySelector("p");
let pTagOut = document.querySelector("p");
pTagIn.addEventListener("mouseover", function( event ) {   
    event.target.style.backgroundColor = "#f0cc18";
});
pTagOut.addEventListener("mouseout", function( event ) {   
    event.target.style.backgroundColor = "#2771e8";
});

// 3
// in progress to change header section to normal
let headerOut = document.querySelector("#top");
headerOut.addEventListener("mouseover", function( event ) {   
    event.target.style.backgroundColor = "green";
});

// 4
// alert a msg when a button is clicked
let button = document.querySelectorAll(".btn");
for ( var i = 0; i < button.length; i++ ) (function(i){ 
    button[i].onclick = function() {
        alert("You clicked me!");
    }})(i);

// 5-6
// change color of form input onblur and onfocus
const form = document.querySelector('form');
form.addEventListener('focus', (event) => {
    event.target.style.background = 'purple';    
  }, true);
form.addEventListener('blur', (event) => {
    event.target.style.background = 'gold';    
  }, true);

// 7
// as the page is loaded user will be alerted 
window.addEventListener('load', (event) => {
  alert('page is fully loaded');
});

// 8
// when u press the enter key you will be alerted
window.addEventListener("keydown", keyPress, false); 
function keyPress(key) {
  if (key.keyCode == "13") {
    alert("You pressed enter");
  }};

// 9
// when u dblclick the home button the background color of the page changes
const btn = document.querySelector(".nav-link");
  btn.addEventListener("dblclick", e);
    function e() {
      document.body.style.background = "#2771e8";
    }

// 10
// look in the console to see your scroll axis
window.addEventListener("scroll", function(e){
    console.log('X=' + window.scrollX + 'Y=' + window.scrollY);
  });





 