(() => {
  let main = () => {
    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")![0];
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    const font: string = "EnvyCodeR";
    const font_height: number = 20;

    ctx.font = String(font_height) + "px " + font;

    const font_width: number = ctx.measureText("a").width;

    let grid_width: number = 0;
    let grid_height: number = 0;

    const resize = (): void => {
      grid_width = Math.ceil(innerWidth / font_width);
      grid_height = Math.ceil(innerHeight / font_height);

      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);

    class FireParticle {
      x: number = 0;
      y: number = 0;
      health: number = 30;
      alive: boolean = true;

      constructor () {
        this.reset();
      }

      draw = (): void => {
        ctx.fillStyle = "white"
        ctx.fillText("a", 0, 0);
      }

      update = (): void => {
        if(!this.alive)
          return;

        this.y --;

        this.health --;
        if(this.health < 0)
          this.alive = false;
      }

      reset = (): void => {
        this.x = Math.round(Math.random() * grid_width);
        this.y = canvas.height;
        this.health = 30;
        this.alive = true;
      }
    }

    let particles: FireParticle[] = [];

    let ticks: number = 0;

    const add_new_particle = (): void => {
      for(let i = 0; i < particles.length; i ++) {
        if(!particles[i].alive) {
          particles[i].reset();
          return;
        }
      }

      particles.push(new FireParticle());
    }

    const loop = (): void => {
      ctx.fillStyle = "white"
      ctx.fillText("asdkfj", 0, 0)
      ////ctx.clearRect(0, 0, canvas.width, canvas.height);
      //
      //if(ticks === 30) {
      //  add_new_particle();
      //  ticks = 0;
      //}
      //
      //for(let i = 0; i < particles.length; i ++) {
      //  particles[i].update();
      //  particles[i].draw();
      //}
      //
      //ticks ++;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  addEventListener("load", main);
})();
