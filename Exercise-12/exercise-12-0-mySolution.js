/*

   # Enunciado Ejercicio 12:
       Dado un número, mostrar todos los números desde ese al 0 de 8 en 8; en 
      una lista con guiones donde cada número debe empezar por nº

   #Ejemplos:

      untilZero(100);
         Devuelve:
            --- Del 100 al 0 ---
            nº100
            nº92
            nº84
            nº76
            ...
            nº4
            --- FIN --
      
   # Sugerencias de cómo hacerlo: 
      - Funnción que reciba un número
      - Inicializar variable con encabezado.
      - Bucle del numero al cero
      - Restar 8
      - Concatenar FIN
*/

function untilZero( num ) {

   let numberLoop = `--- Del ${num} al 0 ---\n`;
   
   while( num > 0) {

      numberLoop += `nº${num}\n`;
      num -= 8;

   }
   

   numberLoop += '--- FIN ---\n';
   return numberLoop;
}

console.log( untilZero(100) );