
// Resolución realizada por quien hizo el ejercicio:

function elementosComunes(array1, array2) {

   const filtrado = array1.filter( elemento => {
      return array2.includes(elemento);
   });

   return filtrado;
}


console.log(
   elementosComunes([4,5,6,7], [7,8,9,7,5])
);