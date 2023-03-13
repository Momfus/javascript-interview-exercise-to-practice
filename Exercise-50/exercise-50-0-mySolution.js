/*
# Enunciado Ejercicio 50:

    Dado un número, devolver cuantos bucles tiene.
    Un número tiene un bucle cuando tiene un círculo cerrado cuando lo dibujas,
   por lo que 6 tiene un bucle, 1 no tiene bucle y 8 tiene dos bucles.
   
   0, 6, 9 tiene un bucle.
   8 tiene dos bucles

# Ejemplos:

   numberBucles(28861);

   // Return: 5
         
       
*/

function numberBucles( number ) {

   const arrayToCompare = ['0', '6', '8', '9'];
   const arrayNumber = number.toString().split('');
   let count = 0;

   arrayNumber.forEach(numberChar => {
      
      if( arrayToCompare.includes(numberChar) ) {
         if( numberChar === '8') {
            count += 2;
         } else {
            count++;
         }
      }

   });

   return count;

} 


console.log( numberBucles(28862) );


