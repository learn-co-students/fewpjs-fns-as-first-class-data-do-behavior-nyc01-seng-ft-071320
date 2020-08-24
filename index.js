/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const theTime = parseInt(time, 10);
  console.log(theTime);
  if (theTime < 12) {
    return "Good Morning"
  }
  else if (theTime > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message){
  const greeting = document.getElementById("greeting")
  greeting.innerText = message
}