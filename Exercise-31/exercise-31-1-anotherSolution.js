// Resolución realizada por quien hizo el ejercicio:#

function angulo( abertura ) {

   let resultado = 'Angulo Completo';
   if( abertura < 90 ) {
      resultado = 'Ángulo agudo';
   } else if( abertura === 90 ) {
      resultado = 'Ángulo recto';
   } else if( abertura > 90 && abertura < 180 ) {
      resultado = 'Ángulo obtuso';
   } else if( abertura === 180 ) {
      resultado = 'Ángulo LLano';
   } else if( abertura > 180 && abertura < 360 ) {
      resultado = 'Ángulo concavo';
   }


   return resultado;

}


console.log( angulo(47) ); 
console.log( angulo(90) ); 
console.log( angulo(145) );
console.log( angulo(180) );  
console.log( angulo(220) );  
console.log( angulo(405) );  

 
 