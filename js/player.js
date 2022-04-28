class Player {
  constructor(ctx) {
    this.ctx = ctx; // Player's environment
    this.width = 50;
    this.height = 60;
    this.y = this.ctx.canvas.height + 10 - this.height; // subtract canvas height minus player's height to get vertical position of the player
    this.x = 15; // Horizontal position of the player
    this.spritesCount = 6; // Number of movements of the player
    this.spriteNumber = 0; // Initialize sprite
    this.img = new Image();
    this.img.src = "./images/player.png";
    this.speedY = 0; // Player's speed
  }

  // jump() method to calculate the speed of the player's jump
  jump() {
    console.log("🤓 Weirdo's Jump!!!");
    if (this.speedY === 0) this.speedY = -20;
  }

  // move()
  move(frameId) {
    this.y += this.speedY;
    if (this.y < this.ctx.canvas.height - this.height - 10)
      this.speedY += 1; // this is gravity reducing the vertical speed
    else {
      this.speedY = 0;
      this.y = this.ctx.canvas.height - this.height - 10;
    } // when player hits the ground we stop the speed
  }

  // animate() method
  animate(frameId) {
    this.spriteNumber = Math.floor((frameId / 10) % this.spritesCount);
  }

  // draw() to draw and draw the movement of the player
  draw(frameId) {
    this.animate(frameId);
    const spriteX = this.spriteNumber * this.width;
    const spriteY = 0;
    const spriteWidth = 100;
    const spriteHeight = 250;

    // Variables to paint the player on the screen
    // Coordinates on the screen
    const drawnX = this.x;
    const drawnY = this.y;
    // Size of the player to paint
    const drawnWidth = this.width;
    const drawnHeight = this.height;

    this.ctx.drawImage(
      this.img,
      spriteX,
      spriteY,
      spriteWidth,
      spriteHeight,
      drawnX,
      drawnY,
      drawnWidth,
      drawnHeight
    );
  }
}
