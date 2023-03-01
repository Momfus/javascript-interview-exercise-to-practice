/*
# Enunciado Ejercicio 38:

    Dado un número,. mostrar listado de los cuadrados de todos los números
   naturales hasta llegar al mismo.


# Sugerencias de cómo hacerlo: 
   - Dos funciones.
   - Hacer bucle del cero al número.
   - Sacar el cuadrado y mostrar

*/

function powList( numb) {

   for( let i = 0; i <= numb; i++) {

      console.log(`${i}^2 = ${Math.pow(i, 2)}`);

   }

}


powList( 5 );