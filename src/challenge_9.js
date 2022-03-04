/* eslint-disable no-plusplus */
function encode(text) {
  let result = '';
  for (let t = 0; t < text.length; t++) {
    if (text[t] === 'a') {
      result += '1';
    } else if (text[t] === 'e') {
      result += '2';
    } else if (text[t] === 'i') {
      result += '3';
    } else if (text[t] === 'o') {
      result += '4';
    } else if (text[t] === 'u') {
      result += '5';
    } else {
      result += text[t];
    }
  }
  return result;
}

function decode(text) {
  let result = '';
  for (let t = 0; t < text.length; t++) {
    if (text[t] === '1') {
      result += 'a';
    } else if (text[t] === '2') {
      result += 'e';
    } else if (text[t] === '3') {
      result += 'i';
    } else if (text[t] === '4') {
      result += 'o';
    } else if (text[t] === '5') {
      result += 'u';
    } else {
      result += text[t];
    }
  }
  return result;
}

module.exports = { encode, decode };
