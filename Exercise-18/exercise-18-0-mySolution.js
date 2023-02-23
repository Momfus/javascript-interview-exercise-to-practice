/*
# Enunciado Ejercicio 18:
   Dado un número, mostrar todos sus números divisores

#Ejemplos:
   
   showDividers(5);
   Return:
      1
      5
      
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que comprueba si un número es divisor de otro.
   - Crear función para recorrer y mostrar
*/


function showDividers(num) {

   let arrNum = [];
   for( let i = 0; i <= num; i++) {
      if( num % i === 0 ) {
         arrNum.push(i);
      }
   }

   console.log(`Los numeros divisores de ${num} son: `);
   arrNum.forEach( n  => {

      console.log(n);

   });
}

showDividers(100);
