/// <reference lib="webworker" />


import { Collision } from "src/interfaces/interfaces";

addEventListener('message', ({ data }) => {
  //const response = collisionsArrayControl();
 

});



function collisionsArrayControl(squareDimensioneX: number, enemiesDimensioneX: number[], enemiesDimensioneLato: number): Collision {
  let count = 0;
  if (typeof enemiesDimensioneX !== 'undefined') {
    for (let i = 0; i < enemiesDimensioneX.length; i++) {
      if (collision(squareDimensioneX, enemiesDimensioneLato, enemiesDimensioneX[i])) {
        return { esito: false, indice: i };
      }
      count = i;
    }
  }

  return { esito: true, indice: count };
}
function collision(playerDimensioneX: number, enemyDimensioneLato: number, enemyDimensioneX: number) {
  var distX = Math.abs(
    playerDimensioneX - enemyDimensioneX - enemyDimensioneLato
  );
  var dx = distX - enemyDimensioneLato;
  return dx == 0;
}



