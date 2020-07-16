import splitZdanie from "./split.js";
import reverseSent from "./reverse.js";

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

let zdanie = "Kto jest mistrzem JS?";
let zdanie2;

zdanie = reverseSent(zdanie);
zdanie2 = splitZdanie(zdanie);

h1.textContent = zdanie;
h2.textContent = zdanie2;

// console.log(zdanie);
// console.log(zdanie2);

export { zdanie };
