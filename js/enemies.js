class Enemies {
  constructor(ctx, x0, y0) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/saw.png";
    this.speedX = -1;
    this.speedY = 0;
    this.width = 20;
    this.height = 20;
    this.x = x0 - this.width - 20;
    this.y = y0 - this.height - 10;
  }

  // move() add the values of the speed to move the enemies on the screen
  move(frameId) {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  // draw() drawing the enemies
  draw(frameId) {
    if (!this.img) this.ctx.fillRect(this.x, this.y, this.width, this.height);
    else this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
