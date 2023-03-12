// Resolución realizada por quien hizo el ejercicio:

const usuarios = [
   {
      nombre: 'Momfus',
      aficiones: ['informatica', 'cine', 'videojuegos']
   },
   {
      nombre: 'Arboleo',
      aficiones: ['surf', 'cine', 'tennis']
   },
   {
      nombre: 'Crios',
      aficiones: ['futbol', 'cine']
   },
   {
      nombre: 'Josepe',
      aficiones: ['futbol', 'videojuegos', 'libros']
   },

];

function aficiones(arrObj) {

   let mapeo = {};
   
   for( const objeto of arrObj) {

      for( const aficion of objeto.aficiones) {
         
         if( !mapeo[aficion] ) {
            mapeo[aficion] = 1;
         } else {
            mapeo[aficion]++;
         }
      }

   }

   return mapeo;

}


console.log( aficiones(usuarios));