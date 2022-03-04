function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = mouse - cat1;
  let resultCat2 = mouse - cat2;

  if (resultCat1 < 0) {
    resultCat1 *= -1;
  }
  if (resultCat2 < 0) {
    resultCat2 *= -1;
  }

  if (resultCat1 === resultCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (resultCat1 < resultCat2) {
    return 'cat1';
  }
  return 'cat2';
}

module.exports = { catAndMouse };
