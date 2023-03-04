// Resolución realizada por quien hizo el ejercicio:


function suspensos( alumnos) {

   let aprobados = 0, suspensos = 0;
   for( let alumno of alumnos ) {

      if( alumno[1] >= 5 ) {
         aprobados++;
      } else {
         suspensos++;
      }

   }   


   return {
      'aprobados': aprobados,
      'suspensos': suspensos
   };

}

console.log(suspensos([

   ['Victor', 10],
   ['Juan', 5],
   ['Pepe', 4],
   ['Maria', 8],
   ['Marta', 4]

]));