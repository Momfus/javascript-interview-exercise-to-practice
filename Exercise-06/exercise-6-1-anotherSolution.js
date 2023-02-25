
// Resolución realizada por quien hizo el ejercicio:

function lado( numero ) {
   let lado = '';

   for(let i = 0; i < numero; i++) {

      lado += '*';

   }

   return lado;

}

function cuadrado( numero ) {

   let dibujo = lado(numero) + '\n';

   let contenido = '';
   for( let i = 0; i < (numero - 2); i++) {
      
      contenido = '*'

      for( let x = 0; x < (numero - 2); x++ ) {

         contenido += ' ';

      }

      contenido += '*';

      dibujo += contenido + '\n';
   }

   dibujo += lado(numero);

   return dibujo;
}

// Ejecutar
console.log( cuadrado(6));