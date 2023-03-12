/*
# Enunciado Ejercicio 47:

    Dado array de objetos, devolver cuales son las aficiones más comunes de
   los usuarios.
   
# Ejemplos:

   countHobbies(users) // Se insgresa un array de objetos.

      Return:

      { informatica: 6, cine: 7, futbol: 2, videojuegos: 1}

       
*/

// Example object array
const users = [
   {
      name: 'Momfus',
      hobbies: ['informatica', 'cine', 'videojuegos']
   },
   {
      name: 'Arboleo',
      hobbies: ['surf', 'cine', 'tennis']
   },
   {
      name: 'Crios',
      hobbies: ['futbol', 'cine']
   },
   {
      name: 'Josepe',
      hobbies: ['futbol', 'videojuegos', 'libros']
   },

];

function countHobbies( users ) {

   hobbiesTotal = {};

   users.forEach( user =>  {

      const userHobbies = user.hobbies;
      
      userHobbies.forEach(element => {
        
         if( hobbiesTotal.hasOwnProperty(element) ) {
            hobbiesTotal[element]++;
         } else {
            hobbiesTotal[element] = 1;
         }
   
      });

   });

   return hobbiesTotal;

}

console.log( countHobbies( users ));