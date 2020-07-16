// reverse.js

// import { zdaniePodzielone } from "./main.js";

const reverseSent = (zdanie) => {
  let newString = "";
  if (Array.isArray(zdanie)) {
    for (let it = 0; it < zdanie.length; it++) {
      for (let i = zdanie[it].length - 1; i >= 0; i--) {
        newString += zdanie[it][i];
      }
      newString += " ";
    }

    return newString;
  } else {
    let zdanie2 = [];
    zdanie2.push(zdanie);
    // console.log(zdanie2);
    for (let it = 0; it < zdanie2.length; it++) {
      for (let i = zdanie2[it].length - 1; i >= 0; i--) {
        newString += zdanie2[it][i];
      }
      if (zdanie2 > newString) {
        newString += " ";
      }
    }

    return newString;
  }
};

export default reverseSent;
