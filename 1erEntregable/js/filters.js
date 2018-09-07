var lienzo = document.getElementById("myCanvas");
var ctx = lienzo.getContext("2d");
var imageData;

function setPixel(imageData, x, y, r, g, b, a) {
  index = (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}

function getRed(imageData, x, y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
}

function getGreen(imageData, x, y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 1];
}

function getBlue(imageData, x, y) {
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 2];
}

// ***************Filtro Brillo******************
function applyShine(shine) {
  imageData = ctx.getImageData(0, 0, 850, 430);

  for (var x = 0; x < imageData.width; x++) {
      for (var y = 0; y < imageData.height; y++) {
        var r = getRed(imageData, x, y);
        var g = getGreen(imageData, x, y);
        var b = getBlue(imageData, x, y);

        r += shine;
        g += shine;;
        b += shine;;
        setPixel(imageData, x, y, r, g, b, 255);

      }
  }
  ctx.putImageData(imageData, 0, 0);
};

// ***************Filtro negativo******************
function applyInvert() {
  imageData = ctx.getImageData(0, 0, 850, 430);

  for (var x = 0; x < imageData.width; x++) {
      for (var y = 0; y < imageData.height; y++) {
        var r = getRed(imageData, x, y);
        var g = getGreen(imageData, x, y);
        var b = getBlue(imageData, x, y);

        r = 255 - r;
        g = 255 - g;
        b = 255 - b;
        setPixel(imageData, x, y, r, g, b, 255);

      }
  }
  ctx.putImageData(imageData, 0, 0);
};

// ***************Filtro Escala de grises******************
function applyGreyScale() {
  imageData = ctx.getImageData(0, 0, 850, 430);

  for (var x = 0; x < imageData.width; x++) {
      for (var y = 0; y < imageData.height; y++) {
        var r = getRed(imageData, x, y);
        var g = getGreen(imageData, x, y);
        var b = getBlue(imageData, x, y);

        var newColor = Math.floor((r + g + b) / 3);
  			setPixel(imageData, x, y, newColor, newColor, newColor, 255);

      }
  }
  ctx.putImageData(imageData, 0, 0);
};

// ***************Filtro Sepia******************
function applySepia() {
  imageData = ctx.getImageData(0, 0, 850, 430);

  for (var x = 0; x < imageData.width; x++) {
      for (var y = 0; y < imageData.height; y++) {
        var r = getRed(imageData, x, y);
        var g = getGreen(imageData, x, y);
        var b = getBlue(imageData, x, y);

        var tR = Math.floor(0.393 * r + 0.769 * g + 0.189 * b);
  			var tG = Math.floor(0.349 * r + 0.686 * g + 0.168 * b);
  			var tB = Math.floor(0.272 * r + 0.534 * g + 0.131 * b);

  			if (tR > 255) {
  				r = 255;
  			} else {
  				r = tR;
  			}
  			if (tG > 255) {
  				g = 255;
  			} else {
  				g = tG;
  			}
  			if (tB > 255) {
  				b = 255;
  			} else {
  				b = tB;
  			}
  			setPixel(imageData, x, y, r, g, b, 255);
  		}
    }
  ctx.putImageData(imageData, 0, 0);
};
