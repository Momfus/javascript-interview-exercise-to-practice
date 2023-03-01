// Resolución realizada por quien hizo el ejercicio:#

function altoBajo( numeros) {

   let ordenados = numeros.sort( (a,b) => a - b ); // b - a seria de mayor a menor

   return  {

      bajo: ordenados[0],
      alto: ordenados[ordenados.length - 1]

   };
   
}

console.log( altoBajo([2,1,3,4,0,5]) );

// Otra solución usando función Math
function minMax(arrayNumbers) {
   return `Mínimo: ${Math.min(...arrayNumbers)}\nMáximo: ${Math.max(...arrayNumbers)}`
}

console.log(minMax([-1, -3, 5, 2, 1, 0]));