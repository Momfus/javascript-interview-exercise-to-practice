// Resolución realizada por quien hizo el ejercicio:

function todosSubStrings( palabra ) {

   let substrings = [];

   for( const letra in palabra ) {
      
      let comienzo = letra ;

      for( let i = 0; i <= (palabra.length - comienzo); i++) {
       
         let final = parseInt(i) + parseInt(comienzo); 

         substrings.push( palabra.substring(comienzo, final));
         
      }

   }
   
   return substrings.filter( elemento => elemento.length >= 1 );

}

console.log( todosSubStrings('hola') );