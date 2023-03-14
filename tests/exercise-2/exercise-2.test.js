
const palindrome = require('./exercise-test-2');

test( 'Comprobar si la función \'palindrome\' está definida', () => {

   expect(palindrome).toBeDefined();

});

test('Es un palíndromo', () => {
   expect(palindrome('otto')).toEqual(true);
});


test('No es un palíndromo', () => {
   expect(palindrome('momfus')).toEqual(false);
});