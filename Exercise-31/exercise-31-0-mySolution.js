/*
# Enunciado Ejercicio 31:

   Dado un número, indicar que tipo de angulo es.

#Ejemplos:
   console.log( angulo(47) );    // Return Agudo
   console.log( angulo(90) );    // Return Recto
   console.log( angulo(145) );   // Return Obstuso
   console.log( angulo(180) );   // Return Llano
   console.log( angulo(220) );   // Return concavo

# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro angulo
   - Condiciones para detectar el angulo
   - Devolver resultado.

*/

function angulo( angle ) {

   if( angle >= 360) {

      angle = angle - Math.floor(angle / 360) * 360; // Wrap the value between 0 and 359
   }

   if( angle === 0 || angle === 180 ) {
      return 'Llano';
   } else if( angle < 90 ) {
      return 'Agudo';
   } else if( angle === 90 ) {
      return 'Recto';
   } else if( angle < 180 ) {
      return 'Obtuso';
   } else {
      return 'Cóncavo';
   }
}

console.log( angulo(47) ); 
console.log( angulo(90) ); 
console.log( angulo(145) );
console.log( angulo(180) );  
console.log( angulo(220) );  
console.log( angulo(405) );  