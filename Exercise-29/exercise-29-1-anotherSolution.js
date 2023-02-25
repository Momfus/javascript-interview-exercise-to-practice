// Resolución realizada por quien hizo el ejercicio:#

function capi(numero) {

   let procesado = parseInt(numero
                     .toString()
                     .split('')
                     .reverse()
                     .join('')
                  );

   return numero === procesado;
}

console.log( capi(2002) );
console.log( capi(2014) );