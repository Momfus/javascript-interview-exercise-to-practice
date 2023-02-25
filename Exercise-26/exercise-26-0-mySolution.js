/*
# Enunciado Ejercicio 26:

    Dado un número, mostrar su serie de fibonacci. 
    La serie de fibonacci es un orden de números donde cada número es la suma
   de los dos anteriores.
   
#Ejemplos:
   
   fib(10)
   
   Retorna:
      Serie completa: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
      Resultado de la serie fibonacci: 55.

# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro numero
   - Crear varaible con dos primeros números de la serie.
   - Bucle desde dos al numero.
   - Sumar los dos anterirores valores a numero actual.
   - Devolver el resultado.

*/



function fib( numb ) {

   let serie = [];

   if( numb >= 0 ) {

      serie.push(0);

   } 

   if( numb >= 1 ) {

      serie.push(1);

   }

   if( numb > 1) {

      for( let i = 2; i <= numb; i++ ) {
         serie.push( serie[i - 1] + serie[i - 2] );
      }
      
   }

   // Show results
   console.log('Serie completa: ' + serie.join(', '));
   console.log('Resultado de la serie fibonacci: ' + serie[numb]);
   
}


fib(10);