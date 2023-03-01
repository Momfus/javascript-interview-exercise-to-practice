/*
# Enunciado Ejercicio 39:

   Dado un texto, comprobar que sea un email válido.
   
# Ejemplos:

   comprobarEmail('arboleo@outlook.com');

      Return: true


# Sugerencias de cómo hacerlo: 
   - Expresión regular
   
*/


function checkEmailValid( email ) {

   isValid = false;
   
   if( typeof email === 'string') {
      
      isValid = ( email.match( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ) ? true: false;

   }

   return isValid;

}

console.log( checkEmailValid( 'arboleo@outlook.com') );