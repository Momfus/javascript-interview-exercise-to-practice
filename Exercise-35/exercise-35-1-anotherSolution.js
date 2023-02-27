// Resolución realizada por quien hizo el ejercicio:#


function primerYultimo(elementos) {

   let nuevos_elementos = [];

   nuevos_elementos.push(elementos[0], elementos[ elementos.length - 1]);


   return nuevos_elementos;

}

console.log( primerYultimo([100, 200, 300, 780]));