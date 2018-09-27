class Chip {

  constructor(x, y, r, c) {
    this.posX = x;
    this.posY = y;
    this.radio = r;
    this.color = c;
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

  estaPresionada(x, y) {
    let nx = x - this.posX;
    let ny = y - this.posY;
    let d = Math.sqrt(Math.pow(nx,2) + Math.pow(ny,2));

    if (this.radio > d) {
     return true;
    }
    else {
     return false;
    }
  }

}
