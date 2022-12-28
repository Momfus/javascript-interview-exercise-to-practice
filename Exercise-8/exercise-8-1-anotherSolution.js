
// Resolución realizada por quien hizo el ejercicio:

function invertirNumero(numero) {
   
   let invertido = parseInt(
                     numero
                     .toString()
                     .split('')
                     .reverse()
                     .join('')
                  ) * Math.sign(numero);
   
   return invertido;
}

console.log(
   'El número invertido es',
   invertirNumero(-76)
);