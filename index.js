/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(arg){
  let hour = parseInt(arg, 10)
  if (hour < 12){
    return "Good Morning";
  }
  if (hour > 12 && hour < 17){
    return "Good Afternoon";
  }
  if (hour > 17) {
    return "Good Evening";
  }
}

function displayMessage(output){
  document.getElementById("greeting").innerText = output;
}