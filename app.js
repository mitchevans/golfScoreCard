// Define UI Vars
const form = document.querySelector('#score-form');
const scores = document.querySelector('#score-card');
const clearBtn = document.querySelector('.clear-scores');
const scoreInput = document.querySelector('#new-score');
const holeNum = document.querySelector('#hole-num');
const plusMinus = document.querySelector('#plus-minus');
const backBtn = document.querySelector('#backBtn');
let par = 0;
let total = 0;
const date = new Date();

//Set Date
document.querySelector('.date').textContent = date.get
// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add a New Score
  form.addEventListener('submit', addScore);

  // Back One
  backBtn.addEventListener('click', backOne)

  // Clear Card 
  clearBtn.addEventListener('click', clearScores);
}

// Add a New Score
function addScore(e) {
  // Create new div Element
  const div = document.createElement('div');

  // Add a text node
  if(scoreInput.value === ''){
    scoreInput.value = '3'
  }
  div.appendChild(document.createTextNode(scoreInput.value));

  // Add a class name
  switch(parseInt(scoreInput.value)) {
    case 1:
      div.className = 'ace col s1 square'
      break;
    case 2:
      div.className = 'birdie col s1 square'
      break;
      case 3:
      div.className = 'par col s1 square'
      break;
      case 4:
      div.className = 'bog col s1 square'
      break;
      case 5:
      div.className = 'doublebog col s1 square'
      break;
    default:
  }

  // Append new score div to scorecard
  scores.appendChild(div);

  // Increment Hole Number
  holeNum.textContent++;

  // Increment Par
  total = total + parseInt(scoreInput.value);

  // Add Score to Total
  par = par + 3

  //Update Plus Minus
  plusMinus.textContent = total - par;

  if (plusMinus.textContent == 0){
    plusMinus.textContent = 'even'
  } else if (plusMinus.textContent >= 0 ) {
    plusMinus.textContent = '+' + plusMinus.textContent
  }

  //Clear input field
  scoreInput.value = '';
  
  e.preventDefault();
}

//Back Button Event
function backOne() {

  // Subtract 3 from par variable
  if(par > 0) {
    par -= 3;
  }

  // Subtract latest score from total variable
  if(scores.firstChild){
    if(par >= 0) {
      total -= parseInt(scores.lastChild.textContent)
    }
  }

  // Reset plus minus variable
  plusMinus.textContent = total - par;
  
  if (plusMinus.textContent == 0){
    plusMinus.textContent = 'even'
  } else if (plusMinus.textContent >= 0 ) {
    plusMinus.textContent = '+' + plusMinus.textContent
  } 
  
  if(total === 0){
    plusMinus.textContent = '+-'
  }

  // Decrement holeNum variable
  if(holeNum.textContent > 1 ){
    holeNum.textContent--;
  }

  // Remove the last Score div 
  if(scores.firstChild){
    scores.removeChild(scores.lastChild);
  }
}

//Clear Score Button
function clearScores() {
  while(scores.firstChild){
    scores.removeChild(scores.firstChild);
  }

  //Reset par, total, plusMinus, holeNum variables
  par = 0;
  total = 0;
  plusMinus.textContent = '+-'
  holeNum.textContent = 1
}
