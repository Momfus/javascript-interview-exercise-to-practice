/*
# Enunciado Ejercicio 41:

   Dado un número, mostrar un triángulo de asteríscos * con ese número de filas,

# Ejemplos:

   triangle(4);

      Return: 

         *
        ***
       *****
      *******
         
# Sugerencias de cómo hacerlo: 
   -   
*/

function triangle(levels) {

  if (levels <= 0) {
    return `The levels number must be greater than zero`;
  }

  let triangle = "";
  let baseWidth = levels + levels - 1;
  let freeSpaceSide = (baseWidth - 1) * 0.5;

  let spaceAux = " ";
  let bodyWidth = 0;

  for (let i = 1; i <= levels; i++) {
    bodyWidth = 2 * i - 1; // i + i - 1
    triangle +=
      spaceAux.repeat(freeSpaceSide) + // Left space
      "*".repeat(bodyWidth) + // Center body
      spaceAux.repeat(freeSpaceSide) + // Rigth space
      "\n";

    freeSpaceSide--;
  }

  return triangle;
}

console.log(triangle(4));

/*

Extra calculation I made
levels 1
      *  1 = 1+0 = baseWidth

levels 2
      *  // freeSpaceSide = (baseWidth -1 ) / 2 --> then after each level, it reduce one
     *** 3 = 2+1 

Levels 3
      *
     ***    
    *****   5 = 3+2
   
Levels 4
      *
     ***
    *****
   *******  7 = 4 + 3

Levels 5
       *   
      ***
     *****
    *******
   ********* 9 = 5 + 4

*/
