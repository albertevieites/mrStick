class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 215;
    this.height = 250;
    this.x = 15;
    this.y = this.ctx.canvas.height - this.height / 2 - 20;
    this.img = new Image();
    this.img.src = "/images/player/player.png";
    this.speedY = 0;

    this.spriteColumns = 6;
    this.spriteRows = 1;

    this.spriteCol = 0;
    this.spriteRow = 0;
    this.spriteX = 0;
    this.spriteY = 0;
  }

  // jump() method to calculate the speed of the player's jump
  jump() {
    // console.log("🤓 Weirdo's Jump!!!");
    if (this.speedY === 0) this.speedY = -19;
  }

  // move()
  move(frameId) {
    this.y += this.speedY;
    if (this.y < this.ctx.canvas.height - this.height / 2 - 20)
      this.speedY += 0.5; // this is gravity reducing the vertical speed
    else {
      this.speedY = 0;
      this.y = this.ctx.canvas.height - this.height / 2 - 20;
    } // when player hits the ground we stop the speed
  }

  setSpriteFrame(frameNumber) {
    if (frameNumber % 5 === 0) {
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
      this.x * 4,
      this.y - 73,
      this.width / 2 - 20,
      this.height / 2 - 20
    );
  }
}
