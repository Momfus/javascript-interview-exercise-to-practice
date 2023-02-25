// Resolución realizada por quien hizo el ejercicio:#

function eliminarDuplicados(elementos) {

   elementos = elementos.filter( elemento => {

      return typeof elemento === 'number'

   });

   let setSinDuplicados = new Set(elementos); // Crea un objeto con los valores unicos (de pasarle un array, me los devuelve como sus elementos sin repetir)

   return Array.from(setSinDuplicados); // Devuelve un array de un objeto

}


console.log( eliminarDuplicados([1,2,1,1,1,3,4]) );