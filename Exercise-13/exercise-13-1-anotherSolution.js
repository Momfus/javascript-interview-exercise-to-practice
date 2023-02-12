// Resolución realizada por quien hizo el ejercicio:

function divideArray(array_principal, numero_elementos) {

   let arreglos = [];

   for( let elemento of array_principal ) {

      let ultimo = arreglos[arreglos.length - 1];

      if( !ultimo || ultimo.length === numero_elementos ) { // En caso que no exista ese ultimo elemento en el array
         arreglos.push([elemento]);
      } else {
         ultimo.push(elemento);
      }

   }
 
   return arreglos;
    
}


console.log(divideArray([7,8,9, 10, 5], 2));