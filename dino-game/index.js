// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

let DINO_EL = document.querySelector("#dino");

function main() {
  let time = 16.67;

  setInterval(update, time);
  //console.log(DINO_EL.style.marginTop);

}

let margin = 0;
let counter = 0;

function update() {
//free fall equation: h = h0 + (1/2) * gravity *(counter* time)^2; 
 let gravity = 20;
 counter++;
 let tau = counter * 16.67 * Math.pow(10,-3);
 margin = 0.5 * gravity * Math.pow(tau, 2)
 DINO_EL.style.marginTop  = margin + "px";

  let topMargin = 256;
  if (margin > 200) {
    DINO_EL.style.marginTop = (topMargin - 64) + "px";
  }
}

main();
