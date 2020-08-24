/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = time.split(":")[0];
  const h = parseInt(hour, 10);

  if (h < 12) {
    return "Good Morning"
  } else if (h > 12 && h < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}



/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}