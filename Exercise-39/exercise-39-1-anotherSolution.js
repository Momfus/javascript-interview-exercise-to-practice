// Resolución realizada por quien hizo el ejercicio:#

function comprobarEmail( email ) {

   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email); 
 
}

console.log(comprobarEmail('arboleo@outlook.com'));
console.log(comprobarEmail('arboleooutlook.com'));