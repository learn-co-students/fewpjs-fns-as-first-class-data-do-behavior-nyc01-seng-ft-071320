/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timestring){
  let hour = parseInt(timestring);
  if (hour<12) return "Good Morning";
  if (hour>= 12 && hour<=17) return "Good Afternoon";
  if (hour>17) return "Good Evening";
  if (hour=>24 || hour<0){
    try {
      throw new Error('Whoops!')
    } catch (e) {
      console.error(e.name + ': ' + e.message)
    }
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
