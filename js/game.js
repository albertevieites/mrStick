class Game {
  screen = 0; // 0 = splash start, 1 = game, 2 = gameOver
  ctx = null; // Context
  frameId = null; // Value to initialize number of frame
  background = null; // Default Background
  player = null; // Default Player
  startButton = document.getElementById("start-button"); // Get class from button element
  textSplash = document.querySelector("#startDiv");
  enemies = [];

  // init() INITIALIZATION METHOD
  // Get context and adjust screen to fill the window calling to setCanvasToFullScreen() method
  init() {
    if (this.ctx === null) {
      this.ctx = document.getElementById("canvas").getContext("2d");
    }

    // Invoke different methods to initialize the game
    this.setEventHandlers();
    this.start();
  }

  // start() to initialize the game choosing the screen (splash start, game, gameOver)
  start() {
    switch (this.screen) {
      case 0:
        this.displaySplashStart();
        break;
      case 1:
        this.reset();
        // bind method to reference to Game class to link with callback play method which is holding on at the event loop(fridge)
        this.frameId = window.requestAnimationFrame(this.play.bind(this));
        break;
      case 2:
        break;
      default:
        console.log("This screen code is unknown!");
    }
  }

  // displaySplashStart() to show the start screen
  displaySplashStart() {
    // click property of the GlobalEventHandlers mixin is the event handler for processing click events on a given element.
    // When the button is clicked, it goes to 1 screen to play and remove startButton
    this.startButton.onclick = () => {
      this.textSplash.classList.add("hidden");
      this.screen = 1;
      this.start();
      this.startButton.remove();
    };
  }

  // setEventHandlers() to handle the key to play
  setEventHandlers() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") this.player.jump();
    });
  }

  // generateObstacle() to create the enemies every x frame
  generateEnemies() {
    if (this.frameId > 100) {
      if (this.frameId % 150 === 0) {
        console.log(" 🟥 Enemy generated!!!");
        this.enemies.push(
          new Enemies(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }
    }
  }

  // checkCollisions() to check collisions between player and enemies
  checkCollisions() {
    // Filtering ...
    this.enemies = this.enemies.filter((enemy) => enemy.x + enemy.width > 0);
    // Check the position of the player ...
    this.enemies.forEach((enemy) => {
      if (
        ((this.player.x + this.player.width >= enemy.x) && (this.player.x <= enemy.x + enemy.x) && (this.player.y + this.player.height >= enemy.y) && (this.player.y <= enemy.y + enemy.height)
        ) ){
        console.log(" 🤯 Colision!!!");
      }
    });
  }

  // reset() to change between screens
  reset() {
    // reseting & refreshing background & player
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
  }

  // play() invoke the logic and order to load every method
  play() {
    this.background.draw(this.frameId);
    this.player.move(this.frameId);
    this.generateEnemies();
    this.enemies.forEach((enemy) => enemy.move(this.frameId));
    this.checkCollisions();
    this.player.draw(this.frameId);
    this.enemies.forEach((enemy) => enemy.draw(this.frameId));
    this.frameId = requestAnimationFrame(this.play.bind(this));
  }
}
