// Your code here
document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

console.log(dodger.style.left);

console.log(dodger.style.bottom);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else {
    moverDodgerRight();
  }
})


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moverDodgerRight() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  dodger.style.right = `${right + 1}px`;
}

