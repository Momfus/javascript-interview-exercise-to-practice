// Resolución realizada por quien hizo el ejercicio:

function palindromo(texto) {
   let invertido = texto
                     .texto('')
                     .reverse()
                     .join('');

   return ( invertido === texto )
   
   
}

console.log( "¿Es un palíndromo? " + palindromo("otto") );