class Chip {

  constructor(x, y, r, c) {
    this.posX = x;
    this.posY = y;
    this.radio = r;
    this.color = c;
    this.usada = false;
  }

  dibujar(ctx, color){
    if (color == null) {
      ctx.fillStyle = this.color;
    }
    else {
      ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

}
