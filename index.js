/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
let tString = time.split(":")
let tNum = tString[0].concat(tString[1])
let t = parseInt(tNum, 10)
 if (t < 1200){
  return 'Good Morning';
 }
 if (t>1700){
  return 'Good Evening';
 }
 else {
  return 'Good Afternoon';
 }
}

/* Write your implementation of displayMessage() */

function displayMessage(greet){
  document.getElementById('greeting').innerText = greet

}

