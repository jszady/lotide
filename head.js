const assertEqual = require('./assertEqual');

const head = function(arr) {
  if(arr[0] === '') {
    return undefined;
  }

  let firstElement = arr[0];
  return firstElement;

}

module.exports = head;
