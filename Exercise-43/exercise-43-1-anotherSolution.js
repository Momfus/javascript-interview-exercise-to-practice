// Resolución realizada por quien hizo el ejercicio:

function laMedia( numeros ) {

   let suma = numeros.reduce( (valorAcumulado, numeroActual ) => {

      return valorAcumulado + numeroActual;

   });

   let media = suma / numeros.length;

   return media;

}

console.log(laMedia([1,2,3]));