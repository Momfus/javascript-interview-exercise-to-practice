// Resolución realizada por quien hizo el ejercicio:

// Función clásica
function repiteme( text, numero_repeticiones ) {
   let resultado = '';

   for( let i = 0; i < numero_repeticiones; i++) {
      resultado += text;
   }

   return resultado;
}
// console.log( repiteme('victor', 2) );

// Función prototipo
String.prototype.repitemePrototipo = function(numero_repeticiones) {

   let resultado = '';

   for( let i = 0; i < numero_repeticiones; i++) {
      resultado += this;
   }

   return resultado;

};

console.log( 'victor'.repitemePrototipo(2) );