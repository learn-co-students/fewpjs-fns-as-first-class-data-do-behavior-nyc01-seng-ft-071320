/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) { 
//parseInt turns string in to integer
const s = time.replace(":", "");
const t = parseInt(s);



if (t < 1200) {
  return "Good Morning";
  } else if (t >= 1200 && t < 1700 ){
    return "Good Afternoon";
  } else if (t > 1700) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greet) {
document.querySelector("#greeting").innerText=greet
}