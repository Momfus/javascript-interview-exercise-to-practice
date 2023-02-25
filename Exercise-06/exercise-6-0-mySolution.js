/*

   # Enunciado Ejercicio 6:
      Dibujar un cuadrado hueco con astericos

   #Ejemplos:
      square(4);
         return:
               ****
               *  *
               *  *
               ****

   # Sugerencias de cómo hacerlo: 
      - Funcion para crear el lado de arriba y abajo del cuadrado
      - Función que haga los lados y el hueco del cuadrado.
      - Bucle de 0 al tamaño del lado menos 2 para equlibrar con el lado de arriba
      y abajo.
      - Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco
      de izquierda y derecha.
      - Ir concatenando en una variable cada linea del cuadrado.
      - Mostrar el cuadrado con la función principal.
*/


/**
 * 
 * @param {Number} sizeSide 
 * @returns {String}
 */
function square( sizeSide ) {

   if( sizeSide < 1) {
      console.error('The square size must be greater than 0');
      return '';
   }
   
   // Top
   const top = '* '.repeat(sizeSide) + '\n';
   
   // Sides
   let row = '';
   if( sizeSide > 2 ) {
      let rowCount = sizeSide - 2;
      do {

         row += '* ' + '  '.repeat(sizeSide - 2);
         row += '*\n';  

         rowCount--; 

      } while( rowCount > 0);
   }    

   // Bottom
   let bottom = '';
   if( sizeSide > 1 ) {
      bottom = '* '.repeat(sizeSide) + '\n';
   }


   return top + row + bottom;
}


console.log(
   square(8)
);