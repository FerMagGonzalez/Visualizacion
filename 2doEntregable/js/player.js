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
      for (let fila = 0; fila < 3; fila++) {
        let ficha = new Chip(fx, fy, 30, this.color);
        ficha.dibujar(ctx);
        this.fichas.push(ficha);
        fx += difHoriz;
      }
      fy += difVert;
    }
  }

  actualizarFichas(ctx){
    let ficha;
    let i = 0;
    let difHoriz = 78;
    let difVert = 68;
    let fxInic = this.posX;
    let fy = this.posY + 42;
    ctx.clearRect((this.posX-difVert), 40, 345, 500);
    for (let col = 0; col < 7; col++) {
      let fx = fxInic;
      for (let fila = 0; fila < 3; fila++) {
        if (i < this.fichas.length) {
          this.fichas[i].dibujar(ctx);
          i++;
          fx += difHoriz;
        }
      }
      fy += difVert;
    }
  }

  // moverFicha(x, y){
  //   for (var i = 0; i < this.fichas.length; i++) {
  //     if (this.fichas[i].estaPresionada(x, y)) {
  //       var message = 'circulo ' + i + ' esta apretado en: ' + x + ' - ' + y;
  //       console.log(message);
  //       //circulos[i].moverFigura(mousePos.x, mousePos.y);
  //     }
  //   }
  // }

}
