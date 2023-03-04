// Resolución realizada por quien hizo el ejercicio:

function dosPalabras(elementos) {

   let nuevos_elementos = [  ];

   for( let palabra of elementos ) {

      if( palabra.split(' ').length >= 2 ) {
         nuevos_elementos.push(palabra);
      }
      
   }

   return nuevos_elementos;

}


console.log( dosPalabras(['hola', 'argentina', 'buenos aires', 'momfus arboleo']) );