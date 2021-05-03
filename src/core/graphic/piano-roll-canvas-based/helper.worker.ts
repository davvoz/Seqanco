let gl: any;
let started: boolean = false;
let x = 0;
let y = 0;
onmessage = function (evt) {
  const canvas = evt.data.canvas;
  const pos = evt.data.pos;
  if (!started) {
    gl = canvas.getContext("2d");
    started = true;
  }

  let w = 4;
  gl.clearRect(0, 0, gl.canvas.width, gl.canvas.height);
  gl.fillRect(pos, y, w, 1000);

};