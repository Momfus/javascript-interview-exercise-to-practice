
// Resolución realizada por quien hizo el ejercicio:


function coincidencias( frase, busqueda ) {

   let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');
   let resultado = 0;
   
   busqueda = busqueda.toLowerCase();
   
   if( texto_limpio.includes(busqueda)) {

      let palabras = texto_limpio.split(' ');
      let mapa = {};

      for( let palabra of palabras) {
          if( mapa[palabra]) {
            mapa[palabra]++;
          } else {
            mapa[palabra] = 1;
          }
      }
      
      resultado = mapa[busqueda];

   }

   return resultado;

}

console.log(
   "Número de coincidencias en la frase: ",
   coincidencias("hola soy una palabra en una frase, PALABRA", "PALABRA")
);