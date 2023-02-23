// Resolución realizada por quien hizo el ejercicio:#


// Definido por json
const coleccion_de_peliculas = [

   {
      titulo: 'El señor de los anillos',
      director: 'Peter Jackson',
      vista: true
   },

   {
      titulo: 'La liga de la justicia',
      director: 'Jack Snyder',
      vista: false
   },

   {
      titulo: 'Los vengadores: Endgame',
      director: 'Joe Rusoo',
      vista: true
   },

   {
      titulo: 'Batman vs Superman',
      director: 'Zack Snyder',
      vista: false
   }

];


function misPeliculas( peliculas ) {
   
   for( let pelicula of peliculas ) {

      let para_mostrar = `"${pelicula.titulo} de ${pelicula.director}"`;

      if( pelicula.vista ) {
         console.log('Ya has visto: ', para_mostrar);
      } else {
         console.log('Te falta por ver: ', para_mostrar);
      }

   }


}


misPeliculas( coleccion_de_peliculas );