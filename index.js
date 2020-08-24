import time from 'time';
/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (numString) {
  const hour = parseInt(numString)
  if (hour < 12) return "Good Morning"
  debugger;
  if (hour > 17) return "Good Evening"
  if (hour > 12 && hour < 17) return "Good Afternoon"
}

function displayMessage (message) {
  document.getElementById("greeting").innerText = message
}
/* Write your implementation of displayMessage() */