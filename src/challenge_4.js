function concatName(name) {
  const n = name[name.length - 1].concat(', ', name[0]);
  return n;
}

module.exports = { concatName };
