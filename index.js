/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let timeNumber = timeString.split(':').join('');
  let time = parseInt(timeNumber);
  if (time < 1200) {
    return "Good Morning"
  }
  if (time >= 1200 && time <= 1700) {
    return "Good Afternoon"
  }
  return "Good Evening"
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = string
}