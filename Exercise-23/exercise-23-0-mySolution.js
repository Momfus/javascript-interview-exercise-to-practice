/*
# Enunciado Ejercicio 23:

    Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra
   en la cadena y luego devolver la cadena.

#Ejemplos:
   firstLetterUpperCase('hola soy momfus');

   Return:
      'Hola Soy Momfus'

# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro texto
   - Poner la primera letra del string en mayúsculas
   - Recorrer el string completo.
   - Si el caracter anterior a la letra actual es un espacio
      -> Poner en mayúscula
   - Si el caracter no es un espacio añadirlo al resultado.
*/

function firstLetterUpperCase( str ) {

   str = str.split(' ')
            .map( x => x[0].toUpperCase() + x.substring(1));
   
   return str.join(' ');
   
}


console.log( firstLetterUpperCase('hola soy momfus') );