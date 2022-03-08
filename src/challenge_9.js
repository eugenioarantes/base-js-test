const charToCode = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(text) {
  let encodedText = '';

  for (let t = 0; t < text.length; t += 1) {
    const char = text[t];
    const codedChar = charToCode[char];

    encodedText += codedChar || char;
  }

  return encodedText;
}

function decode(text) {
  let decodedText = '';
  const isNumberRegex = /[0-9]/;

  for (let t = 0; t < text.length; t += 1) {
    const char = text[t];

    if (isNumberRegex.test(char)) {
      Object.keys(charToCode).forEach((character) => {
        if (charToCode[character] === char) {
          decodedText += character;
        }
      });
    } else decodedText += char;
  }

  return decodedText;
}

module.exports = { encode, decode };
