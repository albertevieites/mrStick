class Background {
  constructor(ctx) {
    // Initial position of the background(top-left corner)
    this.x = 0;

    // Link to the Game{} class cxt property
    this.ctx = ctx;
  }

  // draw() method
  draw(frameId) {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
