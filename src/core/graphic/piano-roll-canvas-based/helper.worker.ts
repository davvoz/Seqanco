let gl: any;
let started: boolean = false;
let x = 0;
let y = 0;
onmessage = function (evt) {
  const canvas = evt.data.canvas;
  const dimension = evt.data.dimension;
  const end = evt.data.dimension;
  const pos = evt.data.pos;
  if (!started) {
    gl = canvas.getContext("2d");
    started = true;
  }


  let h = 1000;
  let w = 1;
  gl.clearRect(0, 0, gl.canvas.width, gl.canvas.height);
  gl.fillRect(pos, y, w, 1000);
  function render(_time: any) {
    if (typeof gl !== 'undefined') {
     
      if (x < end ) {
        x++;
      } else {
        x = 0;
      }
    }

   // requestAnimationFrame(render);
  }

  //requestAnimationFrame(render);
};