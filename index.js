/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeInt = parseInt(time.split(':'))
  if (timeInt > 12 && timeInt < 17) {
    return "Good Afternoon";
  } else if (timeInt < 12) {
    return "Good Morning"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}