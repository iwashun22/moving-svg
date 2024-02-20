"use strict";
window.addEventListener("load", () => {
console.log("loaded")
const arrowSvg = document.getElementById("triangle-icon");

let prev;
arrowSvg.onclick = (e) => {
  console.log("clicked")
  const colors = [["purple", "pink"], ["green", "lime"], ["red", "orange"], ["blue", "cyan"], ["black", "gray"]];
  const rand = () => Math.floor(Math.random() * colors.length);
  let index = rand();
  while(index === prev) {
    index = rand(); 
  }
  prev = index;
  const [d, l] = colors[index];
  document.documentElement.style.cssText = `
    --dark-color: ${d};
    --light-color: ${l}
  `;
}

// for(let n=1; n<=5; n++) {
//   const phoneVoltSvg = document.getElementById(`volt-${n}`);
//   const delayInMS = n * 200;
//   phoneVoltSvg.style.cssText = `
//     animation-delay: ${delayInMS}ms;
//   `
// }

})