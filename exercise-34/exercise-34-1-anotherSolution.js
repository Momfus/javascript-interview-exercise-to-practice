// Resolución realizada por quien hizo el ejercicio:#

function calculadora( numero1, numero2 ) {

   let resultado = `
      La suma es: ${numero1 + numero2}
      La resta es: ${numero1 - numero2}
      La multiplicación es: ${numero1 * numero2}
      La division es: ${numero1 / numero2}
   `;

   return resultado;
}

console.log( calculadora(5, 5));