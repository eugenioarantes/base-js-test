/* eslint-disable object-shorthand */
/* eslint-disable no-plusplus */
function techList(tech, name) {
  if (tech.length > 0) {
    const listTech = [];
    for (let t = 0; t < tech.length; t++) {
      const object1 = {
        tech: tech[t],
        name: name,
      };
      listTech.push(object1);
    }
    // eslint-disable-next-line no-nested-ternary
    listTech.sort((a, b) => ((a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0)));
    return listTech;
  }
  return 'Vazio!';
}

module.exports = { techList };
