/*configure the script to leave the background as you want*/
var Application = (function () {
  var canvas;
  var ctx;
  var imgData;
  var pix;
  var WIDTH;
  var HEIGHT;
  var flickerInterval;

  var init = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = WIDTH = 800;
    canvas.height = HEIGHT = 700;
    ctx.fillStyle = 'white';
    ctx.fillRect(1, 1, WIDTH, HEIGHT);
    ctx.fill();
    imgData = ctx.getImageData(1, 1, WIDTH, HEIGHT);
    pix = imgData.data;
    flickerInterval = setInterval(flickering, 70);
  };

  var flickering = function () {
    for (var i = 0; i < pix.length; i += 4) {
      var color = (Math.random() * 455) + 60;
      pix[i] = color;
      pix[i + 1] = color;
      pix[i + 2] = color;
    }
    ctx.putImageData(imgData, 1, 1);
  };

  return {
    init: init
  };
}());

Application.init();