/*
# Enunciado Ejercicio 21:

    Dada una cadena de texto y un número, recortar el string mostrando los
   X primeros caracteres.

#Ejemplos:
   cutString('Cursos Desarrollo Web', 6)

   Return: 'Cursos'
   
# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetros texto y hasta
   - Comprobar que los datos son correctos.
   - Recortar string con substr
   - Devolver resultado.
*/

function cutString(str, untilIndex) {

   if( typeof str == 'string' && typeof untilIndex == 'number' && untilIndex > 0) {
      return str.substring(0, untilIndex);
   }

   return str;

}


console.log( cutString('Cursos Desarrollo Web', 6));