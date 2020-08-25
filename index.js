/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  const current_time = parseInt(string, 10); 

  if ( current_time < 12) return "Good Morning"
  if ( current_time > 17) return "Good Evening"
  return "Good Afternoon"

}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
