/*
# Enunciado Ejercicio 34:

    Dados dos números, devolver los resultados de las operaciones básicas
   entre ellos (suma, resta producto, division)
   
   
#Ejemplos:

   calculator(5, 5);

   // Return:
      La suma es: 10
      La resta es: 0
      La multiplicación es: 25
      La division es: 1
   
# Sugerencias de cómo hacerlo: 
   - Función con dos parametros.
   - Template string y operaciones.
   - Devolver resultado.
   
*/

function calculator( num1, num2 ) {

   return `
      La suma es: ${num1 + num2}
      La resta es: ${num1 - num2}
      La multiplicación es: ${num1 * num2}
      La división es: ${num1 / num2}
   `;
}


console.log( calculator(5, 5));