const splitZdanie = (zdanie) => {
  let zdaniePodzielone = [""];
  for (let i = 0; i < zdanie.length; i++) {
    if (zdanie[i] !== " ") {
      zdaniePodzielone[zdaniePodzielone.length - 1] += zdanie[i];
    } else if (zdaniePodzielone[zdaniePodzielone.length - 1]) {
      zdaniePodzielone.push("");
    }
  }
  return zdaniePodzielone;
};

export default splitZdanie;
