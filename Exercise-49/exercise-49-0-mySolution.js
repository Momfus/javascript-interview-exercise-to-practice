/*
# Enunciado Ejercicio 49:

   Dado un objeto, comprobar si existe una propiedad en concreto.

# Ejemplos:

   propertieExist( myObject, 'name')
   
      // Return: true
         
       
*/

function propertieExist( object, propertie ) {

   return object.hasOwnProperty(propertie);

}

const myObject =  {
   'name': 'Momfus',
   'age': 32
};

console.log( propertieExist(myObject, 'name') );