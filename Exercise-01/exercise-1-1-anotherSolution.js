
// Resolución realizada por quien hizo el ejercicio:
function tablaMultiplicar(numero) {
      
   let resultado = `# Tabla del ${numero} \n`;

   for( let i = 1; i <= 10; i++) {
      let multiplcacion = (i*numero);

      resultado += `${i} x ${numero} = ${multiplcacion} \n`;
   }

   return resultado;
}

console.log( tablaMultiplicar(5) );