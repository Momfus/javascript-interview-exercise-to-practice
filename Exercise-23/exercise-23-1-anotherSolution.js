// Resolución realizada por quien hizo el ejercicio:#


function enMayusculaEjemplo_1(texto) {
   let resultado = '';

   for( let letra in texto ) {

      if( texto[letra - 1] === ' '  || parseInt(letra) === 0 ) {
         resultado += texto[letra].toUpperCase();
      } else {
         resultado += texto[letra];
      }

   }

   return resultado;
}

function enMayusculaEjemplo_2(texto) {

   let palabras = [];

   for(let palabra of texto.split(' ')) {
      palabras.push(palabra[0].toUpperCase() + palabra.substring(1) );
   }

   return palabras.join(' '); 
}

console.log(enMayusculaEjemplo_1('hola visita mi página'));
console.log(enMayusculaEjemplo_2('hola visita mi página'));