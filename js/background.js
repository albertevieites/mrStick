class Background {
    constructor(ctx) {
        this.ctx = ctx;


        this.backgroundFront = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -7,
            vy: 0,
        };

        this.backgroundFront.img.src = "../images/bk_conveyor.png";

        this.backgroundParallax1 = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -1,
            vy: 0,
        };

        this.backgroundParallax1.img.src = "../images/bk_conveyor_back.png";

        this.backgroundParallax2 = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -0.8,
            vy: 0,
        };

        this.backgroundParallax2.img.src = "../images/bk_factory.png";

        this.backgroundFar = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: 0,
            vx: -0.4,
            vy: 0,
        };

        this.backgroundFar.img.src = "../images/bk_sky.png";
    }

    init() {
        this.backgroundFar.x = 0;
        this.backgroundFar.y = 0;
        this.backgroundParallax2.x = 0;
        this.backgroundParallax2.y = 0;
        this.backgroundParallax1.x = 0;
        this.backgroundParallax1.y = 0;
        this.backgroundFront.x = 0;
        this.backgroundFront.y = 0;
        this.backgroundFront.vx = -5;
    }

    move(frameNumber) {
        this.backgroundFar.x += this.backgroundFar.vx;
        this.backgroundParallax2.x += this.backgroundParallax2.vx;
        this.backgroundParallax1.x += this.backgroundParallax1.vx;
        this.backgroundFront.x += this.backgroundFront.vx;

        if (this.backgroundFar.x + this.backgroundFar.width <= 0)
            this.backgroundFar.x = 0;
        if (this.backgroundParallax2.x + this.backgroundParallax2.width <= 0)
            this.backgroundParallax2.x = 0;
        if (this.backgroundParallax1.x + this.backgroundParallax1.width <= 0)
            this.backgroundParallax1.x = 0;
        if (this.backgroundFront.x + this.backgroundFront.width <= 0)
            this.backgroundFront.x = 0;
    }

    increaseVelocity(frameNumber) {
        if (frameNumber % 500 === 0 && frameNumber !== 0) {
            this.backgroundFront.vx -= 0.5;
        }
    }

    draw(frameNumber) {
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        );

        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x + this.backgroundFar.width,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        );

        this.ctx.drawImage(
            this.backgroundParallax2.img,
            this.backgroundParallax2.x,
            this.backgroundParallax2.y,
            this.backgroundParallax2.width,
            this.backgroundParallax2.height
        );

        this.ctx.drawImage(
            this.backgroundParallax2.img,
            this.backgroundParallax2.x + this.backgroundParallax2.width,
            this.backgroundParallax2.y,
            this.backgroundParallax2.width,
            this.backgroundParallax2.height
        );

        this.ctx.drawImage(
            this.backgroundParallax1.img,
            this.backgroundParallax1.x,
            this.backgroundParallax1.y,
            this.backgroundParallax1.width,
            this.backgroundParallax1.height
        );

        this.ctx.drawImage(
            this.backgroundParallax1.img,
            this.backgroundParallax1.x + this.backgroundParallax1.width,
            this.backgroundParallax1.y,
            this.backgroundParallax1.width,
            this.backgroundParallax1.height
        );

        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        );

        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x + this.backgroundFront.width,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        );
    }
}
