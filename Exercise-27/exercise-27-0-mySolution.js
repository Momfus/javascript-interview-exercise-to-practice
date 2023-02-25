/*
# Enunciado Ejercicio 27:
   Dado un número, mostra a cuantos años, meses y días equivalen.
   
#Ejemplos:
   
   calcularDias(920);

   Retorna:
      Equivale a 2 años, 6 meses y 10 días.
      
# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetros días.
   - Divisiones para sacar años, meses y días.

*/

function calculateDays( totalDias ) {

   let anios = Math.floor(totalDias / 365);

   let calcAux = (totalDias % 365); 
   let meses = Math.floor(calcAux / 30);

   let dias = calcAux % 30;
   return `Equivale a ${anios} años, ${meses} meses y ${dias} días`;
}

console.log( calcularDias(920) );