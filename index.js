/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(currentTime) {
  let time = parseInt(currentTime);
  if (time < 12)
    return "Good Morning"

  if (time > 17 ) 
    return "Good Evening"

    else
      return "Good Afternoon"
  
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
}

