for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// function handleClick() {
//   var audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// }

document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case 'a':
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case 's':
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case 'd':
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case 'j':
      new Audio("./sounds/snare.mp3").play();
      break;
    case 'k':
      new Audio("./sounds/crash.mp3").play();
      break;
    case 'l':
      new Audio("./sounds/kick-bass.mp3").play();
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);
}
