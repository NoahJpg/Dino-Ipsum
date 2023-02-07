export default class Dinos {
  static dinoIpsum(word) {
    return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://dinoipsum.com/api/?format=json&words=1&paragraphs=1`;

    request.addEventListener('loadend', function() {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response, word])
      } else {
        reject([this, response, word])
      }
    });
    request.open("GET", url, true);
    request.send();
  });
}
}