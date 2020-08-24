/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  time = time.split(":")[0]
  if (time < 12) {
    return "Good Morning"
  }
  if (12 < time && time < 17) {
    return "Good Afternoon"
  }
  if (time > 17) {
    return "Good Evening"
  }
}

function displayMessage(message) {
  let element = document.getElementById("greeting")
  element.innerText = message
}