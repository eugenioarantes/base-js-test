/* eslint-disable no-plusplus */
function generatePhoneNumber(number) {
  let countList;
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let n = 0; n < number.length; n++) {
    countList = number.filter((value) => value === number[n]);
    if ((number[n] < 0) || (number[n] > 9) || (countList.length >= 3)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
}

module.exports = { generatePhoneNumber };
