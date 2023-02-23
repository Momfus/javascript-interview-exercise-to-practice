/*
# Enunciado Ejercicio 19:
    Dado un array de objetos de pelicula (titulo, director, vista) y mostrar
   todas las peliculas indicando cual has visto y cual no.

#Ejemplos:
   
   myMovies(movies);
   
   Return:
      Ya has visto "El señor de los anillos de Peter Jackson".
      Te falta por ver: "La liga de la justicia de Zack Snyder".   
      
   
# Sugerencias de cómo hacerlo: 
   - Crear un array de objetos.
   - Crear función para recorrer y mostrar.
*/


/**
 * 
 * @param {boolean} alreadySeen 
 * @return {String} 
 */
function getListMovie( arrayMovie, alreadySeen ) {

   arrString = arrayMovie.filter(
      movie => movie[movie.length - 1] === alreadySeen
   ).map( movie => {
      return [ `${movie[0]} de ${movie[1]}` ];
   });

   return arrString;
}

/**
 * 
 * @param {Array<{string, strin, number}>} arrMovie
 * @return {void} 
 */
function myMovies( arrMovie ) {

   const myMoviesSeen = getListMovie( arrMovie, true );
   const myMoviesNoSeen = getListMovie( arrMovie, false );

   console.log('Ya has visto: ');
   myMoviesSeen.forEach(element => {
      console.log('- ', element[0]);
   });

   console.log('\nTe falta por ver: ');
   myMoviesNoSeen.forEach( element => {
      console.log('- ', element[0]);
   });
      
}

// Array definition
movieArrays = [

   ['El señor de los anillos', 'Peter Jackson', true],
   ['La liga de la justicia', 'Zack Snyder', false],
   ['Pantera negra; Wakanda por siempre', 'Ryan Coogler', false],
   ['Doctor Strange en el multiverso de la locura', 'Sam Raimi', true]
];

// Main call
myMovies(movieArrays);