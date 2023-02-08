import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinos from './dino-ipsum.js'
import Game from 'src/game.js'

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const word = document.querySelector('#word').value;
  document.querySelector('#word').value = null;

  let promise = Dinos.dinoIpsum(word);
  promise.then(function(response) {
    printElements(response); 
  }, function (errorArray) {
    printError(errorArray)
  });
  playGame();
}

// UI Logic

Game.revealChosenLetter(letter) {
  let letterSelect = toLowerCase(document.querySelector('#letter-select').value);
  let display = '';
  for (const letter of Game.wordToGuess) {
    if(Game.correctGuesses.includes(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  return display;
}

function playGame() {
const dinoGame = new Game();
Game.getDinoName().then(() => {
  while (!Game.gameEnd()) {
    const letter = prompt(`Guess a letter. Lives: ${Game.lives} Wrong Letters: ${Game.incorrectGuesses} ${Game.revealChosenLetter()}`);
    Game.checkLetterGuess(letter);
  }
  if (Game.lives === 0) {
    return "You've Lost" 
  } else {
    return "You Win!"
  }
})
}
