import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinos from './dino-ipsum.js'

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const word = document.querySelector('#word').value;
  document.querySelector('#word').value = null;

  let promise = Dinos.dinoIpsum(word);
  promise.then(function(someParameter) {
    printElements()
  })
}

