let btns = document.querySelectorAll("button");

function checkwitch(par) {
  let audio;
  switch (par) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(this.textContent);
  }
}

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    checkwitch(this.textContent);
    addAnimation(this.textContent);
  });
}

document.addEventListener("keypress", function (event) {
  checkwitch(event.key);
  addAnimation(event.key);
});

function addAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
