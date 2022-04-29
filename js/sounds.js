class Sounds {
  main = new Audio("../sounds/main.mp3")
  gameOver = new Audio ("../sounds/game-over.wav")

  play (sound) {
    this[sound].play();
  }

  pause (sound) {
    this[sound].pause();
  }
}
