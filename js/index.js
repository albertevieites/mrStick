import Game from "./game.js";

console.log("JS Loaded in the client");

window.onload = () => {
  const game = new Game();
  game.init();
};
