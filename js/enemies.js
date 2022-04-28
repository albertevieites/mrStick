class Enemies {
  constructor(ctx, x0, y0) {
    this.ctx = ctx;
    this.width = 134;
    this.height = 124;
    this.img = new Image();
    this.img.src = "./images/saw.png";
    this.speedX = -4;
    this.speedY = 0;
    this.x = x0 - this.width - 20;
    this.y = y0 - 86;

    this.spriteColumns = 3;
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
    if (frameNumber % 6 === 0) {
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
      this.height/2,
      this.x,
      this.y,
      this.width*0.9 - 20,
      (this.height*0.9 - 20)/2
    );
  } 
}
