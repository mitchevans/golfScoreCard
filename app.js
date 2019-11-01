// Define UI Vars
const form = document.querySelector('#score-form');
const scores = document.querySelector('#score-card');
const clearBtn = document.querySelector('.clear-scores');
const scoreInput = document.querySelector('.scoreInput');
const holeNum = document.querySelector('#hole-num');
const plusMinus = document.querySelector('#plus-minus');
const backBtn = document.querySelector('#backBtn');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
let par = 0;
let total = 0;
const date = new Date();
let reloadHoleNum = 0;

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getScores);

  // Left Button Event
  leftBtn.addEventListener('click', subtractNum);

  // Right Button Event
  rightBtn.addEventListener('click', addNum);

  // Add a New Score
  form.addEventListener('submit', addScore);

  // Back One
  backBtn.addEventListener('click', backOne)

  // Clear Card 
  clearBtn.addEventListener('click', clearScores);
}

//Left Button
function subtractNum() {
  if (scoreInput.textContent > 1) {
    scoreInput.textContent--
  }
}

//Right Button 
function addNum() {
  scoreInput.textContent++;
}

// Get Scores from LS
function getScores() {
  let scoreArray;
  if (localStorage.getItem('scoreArray') === null) {
    scoreArray = [];
  } else {
    scoreArray = JSON.parse(localStorage.getItem('scoreArray'));
  }

  scoreArray.forEach(function (score) {
    // Create new div Element
    const containerDiv = document.createElement('div');

    // Create a new class for containerDiv
    containerDiv.className = 'newScore';

    // Create a new div Element
    const parDiv = document.createElement('div');

    // Add a class name to parDiv
    parDiv.className = 'parNum';

    // Add a text node to parDiv and increment reloadHoleNum
    reloadHoleNum++
    parDiv.appendChild(document.createTextNode(reloadHoleNum));

    // Create new div Element
    const div = document.createElement('div');

    // Add a text node
    div.appendChild(document.createTextNode(score));

    // Add a class name
    switch (parseInt(score)) {
      case 1:
        div.className = 'ace square'
        break;
      case 2:
        div.className = 'birdie square'
        break;
      case 3:
        div.className = 'par square'
        break;
      case 4:
        div.className = 'bog square'
        break;
      case 5:
        div.className = 'doublebog square'
        break;
      case 6:
        div.className = 'triplebog square'
        break;
      case 7:
        div.className = 'triplebog square'
        break;
      case 8:
        div.className = 'triplebog square'
        break;
      case 9:
        div.className = 'triplebog square'
        break;
      case 10:
        div.className = 'triplebog square'
        break;
      case 11:
        div.className = 'triplebog square'
        break;
      case 12:
        div.className = 'triplebog square'
        break;
      case 13:
        div.className = 'triplebog square'
        break;
      default:
    }

    // Append parDiv to containerDiv
    containerDiv.appendChild(parDiv);

    // Append div to containerDiv
    containerDiv.appendChild(div);

    // Append new score div to scorecard
    scores.appendChild(containerDiv);

    // Set holeNum variable and text from LS
    if (localStorage.getItem('scoreArray') === null) {
      holeNum.textContent = 1;
    } else {
      holeNum.textContent = scoreArray.length + 1;
    }

    // Set Par Variable from LS
    par = scoreArray.length * 3;

    // Set Total Variable from LS
    total = 0;
    for (let i = 0; i < scoreArray.length; i++) {
      total += parseInt(scoreArray[i])
    }

    // Set plusMinus
    plusMinus.textContent = total - par;

    if (plusMinus.textContent == 0) {
      plusMinus.textContent = 'even'
    } else if (plusMinus.textContent >= 0) {
      plusMinus.textContent = '+' + plusMinus.textContent
    }

    if (total === 0) {
      plusMinus.textContent = '+-'
    }
  })
}

// Add a New Score
function addScore(e) {
  // Create new div Element
  const containerDiv = document.createElement('div');

  // Create a new class for containerDiv
  containerDiv.className = 'newScore';

  // Create a new div Element
  const parDiv = document.createElement('div');

  // Add a class name to parDiv
  parDiv.className = 'parNum';

  // Add a text node to parDiv
  parDiv.appendChild(document.createTextNode(holeNum.textContent));

  // Create new div Element
  const div = document.createElement('div');

  // Add a text node
  //if(scoreInput.value === ''){
  //  scoreInput.value = '3'
  //}
  div.appendChild(document.createTextNode(scoreInput.textContent));

  // Add a class name
  switch (parseInt(scoreInput.textContent)) {
    case 1:
      div.className = 'ace square'
      break;
    case 2:
      div.className = 'birdie square'
      break;
    case 3:
      div.className = 'par square'
      break;
    case 4:
      div.className = 'bog square'
      break;
    case 5:
      div.className = 'doublebog square'
      break;
    case 6:
      div.className = 'triplebog square'
      break;
    case 7:
      div.className = 'triplebog square'
      break;
    case 8:
      div.className = 'triplebog square'
      break;
    case 9:
      div.className = 'triplebog square'
      break;
    case 10:
      div.className = 'triplebog square'
      break;
    case 11:
      div.className = 'triplebog square'
      break;
    case 12:
      div.className = 'triplebog square'
      break;
    case 13:
      div.className = 'triplebog square'
      break;
    default:
  }

  // Append parDiv to containerDiv
  containerDiv.appendChild(parDiv);

  // Append div to containerDiv
  containerDiv.appendChild(div);

  // Append new score div to scorecard
  scores.appendChild(containerDiv);

  // Increment Hole Number
  holeNum.textContent++;

  // Add Score to total
  total = total + parseInt(scoreInput.textContent);

  // Increment Par
  par = par + 3

  // Update Plus Minus
  plusMinus.textContent = total - par;

  if (plusMinus.textContent == 0) {
    plusMinus.textContent = 'even'
  } else if (plusMinus.textContent >= 0) {
    plusMinus.textContent = '+' + plusMinus.textContent
  }

  // Store in LS
  storeScoreInLocalStorage(scoreInput.textContent);

  // Clear input field
  scoreInput.textContent = '3';

  e.preventDefault();
}

// Store Score in LS
function storeScoreInLocalStorage(score) {
  let scoreArray;
  if (localStorage.getItem('scoreArray') === null) {
    scoreArray = [];
  } else {
    scoreArray = JSON.parse(localStorage.getItem('scoreArray'));
  }

  scoreArray.push(score)

  localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
}

// Back Button Event
function backOne() {

  // Subtract 3 from par variable
  if (par > 0) {
    par -= 3;
  }

  // Subtract latest score from total variable
  if (scores.firstChild) {
    if (par >= 0) {
      total -= parseInt(scores.lastChild.children[1].textContent)
    }
  }

  // Reset plus minus variable
  plusMinus.textContent = total - par;

  if (plusMinus.textContent == 0) {
    plusMinus.textContent = 'even'
  } else if (plusMinus.textContent >= 0) {
    plusMinus.textContent = '+' + plusMinus.textContent
  }

  if (total === 0) {
    plusMinus.textContent = '+-'
  }

  // Decrement holeNum variable
  if (holeNum.textContent > 1) {
    holeNum.textContent--;
  }

  // Remove the last Score div 
  if (scores.firstChild) {
    scores.removeChild(scores.lastChild);

    // Remove last score from LS
    removeScoreFromLocalStorage();

  }
}

// Remove last score from LS
function removeScoreFromLocalStorage() {
  if (localStorage.getItem('scoreArray') === null) {
    scoreArray = [];
  } else {
    scoreArray = JSON.parse(localStorage.getItem('scoreArray'));
  }

  if (scoreArray.length > 0) {
    scoreArray.splice(scoreArray.length - 1, 1);
  };

  localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
}

// Clear Score Button
function clearScores() {
  while (scores.firstChild) {
    scores.removeChild(scores.firstChild);
  }

  // Reset par, total, plusMinus, holeNum variables
  par = 0;
  total = 0;
  plusMinus.textContent = '+-'
  holeNum.textContent = 1

  // Clear Local Storage
  clearScoresFromLocalStorage();
}

// Clear Local Storage
function clearScoresFromLocalStorage() {
  localStorage.clear();
}
