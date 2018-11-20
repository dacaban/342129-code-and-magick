'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_CORNER = 50;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + CLOUD_CORNER, y);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT - CLOUD_CORNER);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_CORNER, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_CORNER);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_CORNER, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_CORNER, CLOUD_Y + 2 * FONT_GAP);

  var maxTime = getMaxElement(times);

  ctx.textBaseline = 'alphabetic';

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() + 0.1) + ')';
    }
    var itemHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 2 * FONT_GAP - itemHeight, BAR_WIDTH, itemHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]) + '', CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 3 * FONT_GAP - itemHeight);

  }
};
