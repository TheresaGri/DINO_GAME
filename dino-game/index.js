// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

let DINO_EL = document.querySelector("#dino");
let body = document.querySelector("body");

function timer() {
  setInterval(update,16.67);
 }

function main() {
   body.addEventListener("keydown", ()=> {
    timer();
    if (bottom < 10) {
      clearInterval(timer);
      }

  });
  
  
}
let bottom = 0;
let velocity = 20;


function update() {
  velocity -= 1;
  bottom += velocity;
  DINO_EL.style.bottom = bottom + "px";
  console.log(velocity);
 
}

main();
