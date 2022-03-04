/* eslint-disable no-plusplus */
function highestCount(numbers) {
  const highestNumber = Math.max(...numbers);
  let count = 0;
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] === highestNumber) {
      count++;
    }
  }
  return count;
}

module.exports = { highestCount };
