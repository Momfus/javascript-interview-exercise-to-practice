// Resolución realizada por quien hizo el ejercicio:#

function limpiarTextos( texto ) {
   return texto
            .replace(/[^\w]/gi, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');
}

function anagramas(texto1, texto2) {
   return limpiarTextos( texto1 ) === limpiarTextos(texto2);
}

console.log( anagramas('Riesgo', 'Sergio') );
console.log( anagramas('Victor', 'Robles') );