const btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}

