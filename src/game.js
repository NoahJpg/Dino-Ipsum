
// update readme, check into API key?, finish UI logic!

import Dinos from 'src/dino-ipsum.js'

export default class Game {
  constructor() {
    this.wordToGuess = '';
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.lives = 10;
    this.url = 'https://dinoipsum.com/api/?format=json&words=1&paragraphs=1'
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  }

  async getDinoName() {
    return fetch(this.url)
    .then(response => response.json())
    .then(data => {
      let wordToGuess = data.word;
      return this.wordToGuess;
    })
    .catch(error => console.error(error))
  }

  checkLetterGuess(letter) {
    if (this.wordToGuess.includes(letter)) { 
      this.correctGuesses.push(letter)
    } else {
      this.incorrectGuesses.push(letter);
      this.lives--;
      //return this.lives; UI Logic?
    }
  }

  gameEnd() {
    return this.lives === 0 || this.wordToGuess.length === this.correctGuesses.length;
    }
  
  
} //final bracket
