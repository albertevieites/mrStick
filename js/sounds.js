class Sounds {
  main = new Audio("./sounds/main.mp3")

  play (sound) {
    this[sound].play();
  }

  pause (sound) {
    this[sound].pause();
  }
}