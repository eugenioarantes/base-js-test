/* eslint-disable no-plusplus */
function fizzBuzz(numbers) {
  const result = [];
  for (let n = 0; n < numbers.length; n++) {
    if ((numbers[n] % 5 === 0) && (numbers[n] % 3 === 0)) {
      result.push('fizzBuzz');
    } else if (numbers[n] % 5 === 0) {
      result.push('buzz');
    } else if (numbers[n] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

module.exports = { fizzBuzz };
