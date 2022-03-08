function generatePhoneNumber(numbersList) {
  let countList;
  let firstPartOfPhone = '';
  let secondPartOfPhone = '';
  let thirdPartOfPhone = '';

  if (numbersList.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numberIndex = 0; numberIndex < numbersList.length; numberIndex += 1) {
    countList = numbersList.filter((number) => number === numbersList[numberIndex]);
    if ((numbersList[numberIndex] < 0)
      || (numbersList[numberIndex] > 9) || (countList.length >= 3)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    if ((numberIndex >= 0) && (numberIndex <= 1)) {
      firstPartOfPhone += numbersList[numberIndex];
    } else if ((numberIndex >= 2) && (numberIndex <= 6)) {
      secondPartOfPhone += numbersList[numberIndex];
    } else {
      thirdPartOfPhone += numbersList[numberIndex];
    }
  }

  return `(${firstPartOfPhone}) ${secondPartOfPhone}-${thirdPartOfPhone}`;
}

module.exports = { generatePhoneNumber };
