// Detect button press
const btns = document.querySelectorAll(".drum");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let buttonText = this.textContent;
    playSounds(buttonText);
    buttonAnimation(buttonText);
  });
}

// Detect keydown press
document.addEventListener("keydown", function(event) {
  let buttonKey = event.key;
  playSounds(buttonKey);
  buttonAnimation(buttonKey);
});

// Play sounds
function playSounds(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonText);
  }
}

// Play animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function() {
    activeButton.classList.toggle("pressed");
  }, 100);
}