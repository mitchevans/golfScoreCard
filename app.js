// Define UI Vars
const form = document.querySelector('#score-form');
const scores = document.querySelector('#score-card');
const clearBtn = document.querySelector('.clear-scores');
const scoreInput = document.querySelector('#new-score');
const holeNum = document.querySelector('#hole-num');
let par = document.querySelector('#par');
const total = document.querySelector('#total');
const plusMinus = document.querySelector('#plus-minus');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add a New Score
  form.addEventListener('submit', addScore);

  // Clear Card 
  clearBtn.addEventListener('click', clearScores);

}

// Add a New Score
function addScore(e) {
  // Create new div Element
  const div = document.createElement('div');
console.log(scoreInput.value)
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
  if(par.textContent === ''){
    par.textContent = 0;
  } 
  par.textContent = parseInt(par.textContent) + 3;

  // Add Score to Total
  if(total.textContent === ''){
    total.textContent = 0;
  } 
  total.textContent = parseInt(total.textContent) + parseInt(scoreInput.value);

  //Update Plus Minus
  plusMinus.textContent = total.textContent - par.textContent;

  if (plusMinus.textContent == 0){
    plusMinus.textContent = 'even'
  } else if (plusMinus.textContent >= 0 ) {
    plusMinus.textContent = '+' + plusMinus.textContent
  }


  //Clear input field
  scoreInput.value = '';
  
  e.preventDefault();
}

function clearScores() {
  while(scores.firstChild){
    scores.removeChild(scores.firstChild);
  }
  par.textContent = '';
  total.textContent = '';
  plusMinus.textContent = '+-'
}