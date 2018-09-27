document.addEventListener("DOMContentLoaded", function(event) {

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let j1 = new Player("JUGADOR 1", 120, 40, '#D10076');
  let j2 = new Player("JUGADOR 2", 1075, 40, '#FFD100');
  let tablero = new Board(400, 80, 550, 430, '#057CA9', j1);

  let mousePos;
  let click = false;
  let fichasJugActivo;
  let fichaSel;


  tablero.crearTablero(ctx);
  j1.crearJugador(ctx);
  j2.crearJugador(ctx);


  function getMousePos(canvas, e) {
    let pos = canvas.getBoundingClientRect();
    return { // devuelve un objeto
      x: Math.round(e.clientX - pos.left),
      y: Math.round(e.clientY - pos.top)
    }
  }

  canvas.onmousedown = function (e) {
    click = true;
    mousePos = getMousePos(canvas, e);
    fichasJugActivo = tablero.jugActivo.fichas;
    for (let i = 0; i < fichasJugActivo.length; i++) {
      if (fichasJugActivo[i].estaPresionada(mousePos.x, mousePos.y)) {
        fichaSel = fichasJugActivo[i];
        fichasJugActivo.pop();
        tablero.jugActivo.actualizarFichas(ctx);
        if (tablero.jugActivo === j1) {
          tablero.cambiarJugadorActivo(j2);
        }
        else {
          tablero.cambiarJugadorActivo(j1);
        }
      }
    }
  }

  canvas.onmouseup = function (e) {
    click = false;
    fichaSel.dibujar(ctx);
    // if (juego.hayFichaClickeada()){
    //     juego.insertarFicha(x,y);
    // }
  }

  canvas.onmousemove = function (e) {
    if (click) {
      mousePos = getMousePos(canvas, e);
      fichasJugActivo = tablero.jugActivo.fichas;
      fichaSel.posX = mousePos.x;
      fichaSel.posY = mousePos.y;
      // fichaSel.dibujar(ctx);
    //   if (fichasJugActivo[i].estaPresionada(mousePos.x, mousePos.y))
    //       // juego.moveFicha(x, y);
    }
  }

});
