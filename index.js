// Your code goes here
//Manipulating our p element
document.querySelector("p").textContent =
  "JavaScript is so cool. It lets me add text to my page programmatically.";
//creating DOM events
const event = document.createEvent("Event");
//Adding DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("p").textContent = "This is really cool!"; //Grabbing and reassigning value to our p element
});
