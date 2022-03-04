/* eslint-disable no-plusplus */
function hydrate(phrase) {
  const regex = /[0-9]/;
  const numbersList = [];
  let result = 0;
  for (let p = 0; p < phrase.length; p++) {
    if (regex.test(phrase[p])) {
      // eslint-disable-next-line radix
      const value = parseInt(phrase[p]);
      numbersList.push(value);
    }
  }
  for (let n = 0; n < numbersList.length; n++) {
    result += numbersList[n];
  }
  if (result === 1) {
    return '1 copo de água';
  }
  return `${result} copos de água`;
}

module.exports = { hydrate };
