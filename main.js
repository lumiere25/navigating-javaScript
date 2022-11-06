 
  function colorChange() {
    let color = document.querySelector(".highlight");
    console.log(color);
    color.style.color = "red";
   }


  // onmouseover and onmouseout
  function changeBackground() {
   document.getElementById("h").style.backgroundColor = "rgb(99, 52, 107)"
  }

  function revert() {
    document.getElementById("h").style.backgroundColor = "";
  }


  // calls the targeted class
  //We create a function to target the id.
  //we add eventlistener so once button is clicked we run the function.
  
  // let button = document.querySelector(".btn_btn");




// Write an expression to hide our text
//This function needs to be executed after

//Write a function with a storePrice 


// document.querySelector(".form_contents").style.backgroundColor = "hotpink";
// let containervb = document.querySelector(".container").style.backgroundColor = "hotpink";


// We can use multiple events in our functions to exectute different tasks:

// click, dblclick, mouseover, mouseout etc.
// const clicker = document.getElementById("clicker");

// function popWhizBang() {
//   alert("Hey there!");
//   clicker.style.color = "hotpink";
//   clicker.innerHTML = "You are awesome!";
// }
// clicker.addEventListener("mouseover", popWhizBang);


let btn = document.querySelector(".btn_btn");

function buttonChange() {
 document.getElementById("opentext")
.innerHTML  = "Hello, We hope you are having a lovely day!";
 document.getElementById("opentext").style.color = "purple";
}
btn.addEventListener("click", buttonChange);



// Reminders:
// I could connect my About button to link to the Gallery section of my webpage.
// I need to also reference the gallery.html in index.
// I could add a colored hyperlink as the page scrolls, the hyperlink moves through my navigation items on my nav.

let button = document.querySelector(".btnthree");

function poppyBtn() {
  button.classList.toggle("btn-pop");
}

button.addEventListener("click", poppyBtn);





let btn3 = document.querySelector(".btnthree");


function fetchPoodles() {
fetch("https://dog.ceo/api/breeds/list/all")
.then((response) => response.json())
.then((data) => document.getElementById("poodle_sizes").innerHTML = data.message.poodle);
// .then((data) => console.log(data.message.poodle));


}

btn3.addEventListener("click", fetchPoodles);











