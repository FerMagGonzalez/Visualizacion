var lienzo = document.getElementById("myCanvas");
var ctx = lienzo.getContext("2d");
var imgOriginal = new Image();

//***********************Parte manejo de imagenes*************************

//Borrar Lienzo
function limpiarLienzo() {
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);
}

//Nuevo Lienzo
document.getElementById('new').addEventListener('click', function(e){
    limpiarLienzo();
});

//Cargar imagen
document.getElementById('upload').addEventListener('change', function(e){
	limpiarLienzo();
  var reader = new FileReader();
  reader.onload = function(event){
	  var img = new Image();
	  img.onload = function(){
	    if(img.height > lienzo.height){
	        var proportion = (lienzo.height/img.height) * 100;
	        img.width = (proportion * img.width) / 100;
	        img.height = (proportion * img.height) / 100;
	    }
	    if(img.width > lienzo.width && img.width > img.height){
	        var proportion = (lienzo.width/img.width) * 100;
	        img.width = (proportion * img.width) / 100;
	        img.height = (proportion * img.height) / 100;
	    }
	    ctx.drawImage(img, 0, 0, img.width, img.height);
	    imgOriginal.src = lienzo.toDataURL();
	  }
	  img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
});

//Guardar imagen
var link = document.getElementById('save');
link.addEventListener('click', function(e) {
  link.setAttribute('download', 'imagen.png');
  link.setAttribute('href', lienzo.toDataURL("image/png").replace("image/png", "image/octet-stream"));
});


//***********************Parte dibujo con mouse*************************

var pulsado = false;
var color = "#000000";
var tamano = 5;

function obtenerPosicionActual(event) {
    var canvasLimites = lienzo.getBoundingClientRect();
    return {
      x: (event.clientX - canvasLimites.left),
      y: (event.clientY - canvasLimites.top),
    }
}

function draw(x, y) {
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = tamano;
  ctx.lineCap = "round";
  ctx.stroke();
}

function pintarLinea(event) {
  var lim = obtenerPosicionActual(event);
  if (pulsado) {
    draw(lim.x, lim.y);
  }
};

function cambiarEstado(event) {
  var lim = obtenerPosicionActual(event);
  ctx.beginPath();
  ctx.moveTo(lim.x, lim.y);
  pulsado = true;
};

function soltarMouse() {
  pulsado = false;
};

function cambiarColor() {
  color = document.getElementById('colores').value;
}

function cambiarGrosor() {
  tamano = document.getElementById('grosor').value;
}

function borrar() {
  color = "#ffffff";
  document.getElementById('colores').setAttribute("disabled", ""); //deshabilita el input de seleccion de colores
}

function dibujar() {
  lienzo.addEventListener("mousemove", pintarLinea , false);
  lienzo.addEventListener("mousedown", cambiarEstado, false);
  lienzo.addEventListener("mouseup", soltarMouse, false);
  color = document.getElementById('colores').value;
  document.getElementById('colores').removeAttribute("disabled"); //habilita el input de seleccion de colores
}
