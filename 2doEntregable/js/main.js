let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let tablero = new Board(400, 80, 550, 430, '#057CA9');
let j1 = new Player("JUGADOR 1", 120, 40, '#D10076');
let j2 = new Player("JUGADOR 2", 1075, 40, '#FFD100');


tablero.crearTablero(ctx);
j1.crearJugador(ctx);
j2.crearJugador(ctx);


//ficha.dibujar(ctx, '#59d52e');
