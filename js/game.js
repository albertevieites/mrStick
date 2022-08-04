class Game {
  // GLOBAL VARIABLES
  screen = 0; // 0 = splash start, 1 = game, 2 = gameOver
  ctx = null; // Context

  player = null; // Default Player
  obstacles = []; // Obstacles
  enemies = []; // Enemies
  background = null; // Default Background

  frameId = null; // Value to initialize number of frame
  score = 0; // Score
  sounds = new Sounds(); // Music and sound effects of the game

  startButton = document.querySelector("button"); // play() to update the game
  textSplash = document.querySelector(".start-screen");
  canvas = document.querySelector("canvas");

  isOver = false;

  /* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   */

  // init() INITIALIZATION METHOD
  // Get context and adjust screen to fill the window calling to setCanvasToFullScreen() method
  init() {
    if (this.ctx === null) {
      this.ctx = document.querySelector("canvas").getContext("2d");
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

  // generateObstacle() to create the obstacles every x frame
  generateObstacles() {
    if (this.frameId > 10) {
      if (this.frameId % 200 === 0) {
        //console.log(" 🟥 Obstacle generated!!!");
        this.obstacles.push(
          new Obstacles(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }
    }
  }

  // generateEnemies() to create the enemies every x frame
  generateEnemies() {
    if (this.frameId > 100) {
      if (this.frameId % 700 === 0) {
        //console.log(" ☠️ Enemies generated!!!");
        this.enemies.push(
          new Enemies(this.ctx, this.ctx.canvas.width, this.ctx.canvas.height)
        );
      }
    }
  }

  // checkCollisions() to check collisions between player and enemies
  checkCollisions() {
    // Filtering ...
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.x + obstacle.width > 0
    );
    // Check the position of the player ...
    this.obstacles.forEach((obstacle) => {
      if (
        this.player.x + (this.player.width / 2 - 30) >= obstacle.x &&
        this.player.x <= obstacle.x + (obstacle.width * 0.7 - 30) &&
        this.player.y + (this.player.height / 2 - 60) >= obstacle.y &&
        this.player.y <= obstacle.y + (obstacle.height * 0.9 - 20) / 2
      ) {
        console.log("Obstacle 🤯 Colision!!!");
        this.isOver = true;
      }
    });
  }

  // checkEnemiesCollisions
  checkEnemiesCollisions() {
    // Filtering ...
    this.enemies = this.enemies.filter((enemy) => enemy.x + enemy.width > 0);
    // Check the position of the player ...
    this.enemies.forEach((enemy, index) => {
      if (
        this.player.x + (this.player.width / 2 - 20) >= enemy.x &&
        this.player.x <= enemy.x + (enemy.width * 0.7 - 20) &&
        this.player.y + (this.player.height - 79) >= enemy.y &&
        this.player.y <= enemy.y + enemy.height
      ) {
        // console.log(" Enemy 🤯 Colision!!!");
        this.enemies.splice(index, 1);
        // this.isOver = true;
      }
    });
  }

  // Score
  scoreUpdate() {
    if (this.frameId !== 0 && this.frameId % 20 === 0) this.score++;
  }

  drawScore() {
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "normal 24px 'Helvetica'";
    this.ctx.fillText(`SCORE: ${this.score}`, 30, 50);
    this.ctx.restore();
  }

  /* GAME OVER */
  gameOver() {
    cancelAnimationFrame(this.frameId);
    this.frameId = null;
    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 6rem Helvetica";
    this.ctx.fillText(
      `LOOOOOSER!!!`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
    this.sounds.play("gameOver");
    this.sounds.pause("song");
    this.ctx.restore();
  }

  // reset() to change between screens
  reset() {
    // reseting & refreshing background & player
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.sounds.play("song");
  }

  // play() invoke the logic and order to load every method
  play() {
    this.background.move(this.frameId);
    this.background.draw(this.frameId);
    this.player.move(this.frameId);
    this.generateObstacles();
    this.generateEnemies();
    this.obstacles.forEach((obstacle) => obstacle.move(this.frameId));
    this.enemies.forEach((enemy) => enemy.move(this.frameId));
    this.checkCollisions();
    this.checkEnemiesCollisions();
    this.player.draw(this.frameId);
    this.obstacles.forEach((obstacle) => obstacle.draw(this.frameId));
    this.enemies.forEach((enemy) => enemy.draw(this.frameId));
    this.drawScore();
    this.scoreUpdate();
    this.frameId = requestAnimationFrame(this.play.bind(this));
    if (this.isOver) this.gameOver();
  }
}
