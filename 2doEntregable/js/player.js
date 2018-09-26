class Player {

  constructor(name, posx, posy, color) {
    this.name = name;
    this.posX = posx;
    this.posY = posy;
    this.color = color;
    this.fichas = [];
  }

  crearJugador(ctx){
    ctx.font = "30px Arial";
    ctx.fillStyle = this.color;
    ctx.fillText(this.name, this.posX, this.posY);
    let difHoriz = 78;
    let difVert = 68;
    let fxInic = this.posX;
    let fy = this.posY + 42;
    for (let col = 0; col < 7; col++) {
      let fx = fxInic;
      this.fichas[col] = [];
      for (let fila = 0; fila < 3; fila++) {
        this.fichas[col][fila] = new Chip(fx, fy, 30, this.color);
        this.fichas[col][fila].dibujar(ctx);
        fx += difHoriz;
      }
      fy += difVert;
    }
  }

}
