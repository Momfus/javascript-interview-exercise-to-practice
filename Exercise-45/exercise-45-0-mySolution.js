/*
# Enunciado Ejercicio 45:

      Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos están
   suspendidos y cuántos están aprobados.

      Suspendido con una nota no mayor a 6.
   
# Ejemplos:

   No se dió ejemplo, arme uno para dar mas complejidad

   studentsSuspended( [
      ['Momfus', 7],
      ['Arboleo', 4],
      ['Fausto', 9],
      ['Crios', 3],
      ['Pelin', 4] 
   ])

      Return:
         Suspended = 3:
            Arboleo (4)
            Crios (3)
            Pelin (4) 

         Approve = 2:
            Momfus (7)
            Fausto (9)
   
# Sugerencias de cómo hacerlo: 
   -   
*/

function studentsSuspended( arrayStudentsNotes ) {

   // Filter students by suspended
   let arraySuspended =  arrayStudentsNotes.filter( (studentNote) => {

      return studentNote[1] <= 6;

   });

   // Filter students by approved
   arrayApproved =  arrayStudentsNotes.filter( (studentNote) => {

      return studentNote[1] > 6;

   });

   // Show in a column the suspended students
   stringAux = `SUSPENDED = ${arraySuspended.length}:\n`;

   arraySuspended.forEach(student => {
      
      stringAux += `\t${student[0]} (${student[1]})\n`;

   });

   // Show in a column the suspended students
   stringAux += `\nAPPROVED = ${arrayApproved.length}:\n`;

   arrayApproved.forEach(student => {
      
      stringAux += `\t${student[0]} (${student[1]})\n`;

   });


   return stringAux;
   
}

console.log( 
   studentsSuspended( [
      ['Momfus', 7],
      ['Arboleo', 4],
      ['Fausto', 9],
      ['Crios', 3],
      ['Pelin', 4] 
   ])
);