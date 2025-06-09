class Enemies {
  constructor(ctx, x0, y0) {
    this.ctx = ctx;
    this.width = 506;
    this.height = 298;
    this.img = new Image();
    this.img.src = "/images/enemies/flame-thrower.png";
    this.speedX = -3;
    this.speedY = 0;
    this.x = x0 - this.width + 800;
    this.y = y0 - 80;

    this.spriteColumns = 4;
    this.spriteRows = 1;

    this.spriteCol = 0;
    this.spriteRow = 0;
    this.spriteX = 0;
    this.spriteY = 0;
  }

  // move() add the values of the speed to move the enemies on the screen
  move(frameId) {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  // draw() drawing the enemies
  setSpriteFrame(frameNumber) {
    if (frameNumber % 8 === 0) {
      this.spriteCol += 1;

      if (this.spriteCol >= this.spriteColumns) {
        this.spriteCol = 0;
      }

      this.spriteX = this.width * this.spriteCol;
      this.spriteY = this.height * this.spriteRow;
    }
  }

  // draw() to draw and draw the movement of the player
  draw(frameId) {
    this.setSpriteFrame(frameId);
    this.ctx.drawImage(
      this.img,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y - 50,
      this.width * 0.8 - 200,
      (this.height * 0.8 - 350)
    );
  }
}