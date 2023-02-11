// Resolución realizada por quien hizo el ejercicio:

function hastaCero( numero ) {

   let resultado = `--- Del ${numero} al 0 ---\n`;

   while( numero > 0 ) {
      resultado += `- nº${numero} \n`;
      numero -= 8;
   }

   if( numero <= 0 ) {
      resultado += '- nº0 \n';
   }

   resultado += '--- FIN ---';

   return resultado;
}


console.log( hastaCero(100) );