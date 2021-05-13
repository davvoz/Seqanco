/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  let canvasMetro = data.canvasMetro;
  let width = canvasMetro.width;
  let height = canvasMetro.height;
  let ctxCanvasMetro = canvasMetro.getContext("2d");
  let dataArray = data.dataArray;
  const fftSize = 2048;
  draw(ctxCanvasMetro, dataArray, width, height, fftSize)
  postMessage(data + 1);
});

function draw(ctxCanvasMetro: any, dataArray: any, width: any, height: any, fftSize: any) {
  ctxCanvasMetro.clearRect(0, 0, width, height);
  requestAnimationFrame(() => draw(ctxCanvasMetro, dataArray, width, height, fftSize));

  let i = 0;
  while (i < fftSize) {
    ctxCanvasMetro.fillRect(0, 0, (dataArray[i++] - 130) * 3, height);

  }
}
