let slide = document.getElementById("slide");
let upArrow = document.getElementById("up_arrow");
let downArrow = document.getElementById("down_arrow");

let x = 0;

upArrow.onclick = () => {
  if (x > "-900") {
    x = x - 300;
    slide.style.top = x + "px";
  }
};

//
downArrow.onclick = () => {
  if (x < 0) {
    x = x + 300;
    slide.style.top = x + "px";
  }
};
