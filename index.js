/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let splitTimeHour = parseInt(string.split(":")[0], 10);
  if (splitTimeHour <= 12) {
    return "Good Morning"; } 
  else if (splitTimeHour > 17) {
    return "Good Evening";}
  else {
    return "Good Afternoon";
  }
}



/* Write your implementation of displayMessage() */

function displayMessage(text) {
  let target = document.getElementById("greeting");
  target.innerText = text;
}