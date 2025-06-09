export class Sounds {
  song = new Audio("/sounds/song.mp3");
  gameOver = new Audio("/sounds/game-over.wav");

  play(sound) {
    this[sound].play();
  }

  pause(sound) {
    this[sound].pause();
  }
}
