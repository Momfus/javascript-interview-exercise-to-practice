// Resolución realizada por quien hizo el ejercicio:#

function fibonacci(numero) {

   let serie = [0, 1];

   for( let i = 2; i <= numero; i++) {
      serie.push(serie[i-1] + serie[i - 2]);
   }

   return [serie, serie[numero] ];
}


console.log(" Serie completa: ", fibonacci(10)[0] );
console.log(" Resultado fibonacci: ", fibonacci(10)[1] );