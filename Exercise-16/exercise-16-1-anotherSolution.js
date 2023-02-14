// Resolución realizada por quien hizo el ejercicio:#

function vocales(texto) {

   let coincidencias =  texto.match(/[aeiou]/gi); // Con "i" en la expresion regular se fija indistintamente en mayúsculas y minúsculas

   return coincidencias ? coincidencias.length: 0;
}


console.log('Número de vocasles', vocales('victorroblesweb.es') );