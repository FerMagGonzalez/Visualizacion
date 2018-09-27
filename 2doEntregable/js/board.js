class Board {

  constructor(posx, posy, width, height, color, jugador) {
    this.posX = posx;
    this.posY = posy;
    this.width = width;
    this.height = height;
    this.color = color;
    this.espacios = [];
    this.jugActivo = jugador;
  }

  crearTablero(ctx){
    //espacio entre fichas horizontalmente 78
    //espacio entre fichas verticalmente 68
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    let difHoriz = 78;
    let difVert = 68;
    let fxInic = this.posX + 40;
    let fy = this.posY + 42;
    for (let col = 0; col < 6; col++) {
      let fx = fxInic;
      this.espacios[col] = [];
      for (let fila = 0; fila < 7; fila++) {
        this.espacios[col][fila] = new Chip(fx, fy, 30, '#0c2c38');
        this.espacios[col][fila].dibujar(ctx);
        fx += difHoriz;
      }
      fy += difVert;
    }
  }

  cambiarJugadorActivo(jugador){
    this.jugActivo = jugador;
  }

  actualizarTablero(ctx){
    let difHoriz = 78;
    let difVert = 68;
    let fxInic = this.posX + 40;
    let fy = this.posY + 42;
    for (let col = 0; col < 6; col++) {
      let fx = fxInic;
      for (let fila = 0; fila < 7; fila++) {
        this.espacios[col][fila].dibujar(ctx, this.jugActivo.color);
        fx += difHoriz;
      }
      fy += difVert;
    }
  }

}
