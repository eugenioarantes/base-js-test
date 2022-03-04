function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > lineB) && (lineA > lineC)) {
    if ((lineA < (lineB + lineC)) && (lineA > (lineB - lineC))) {
      return true;
    }
    return false;
  }
  if ((lineB > lineA) && (lineB > lineC)) {
    if ((lineB < (lineA + lineC)) && (lineB > (lineA - lineC))) {
      return true;
    }
    return false;
  }
  if ((lineC > lineA) && (lineC > lineB)) {
    if ((lineC < (lineB + lineA)) && (lineC > (lineB - lineA))) {
      return true;
    }
    return false;
  }
  return false;
}

module.exports = { triangleCheck };
