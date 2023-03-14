const multiplicationTable = require('./exercise-test-1');

test( 'Comprobar si la función \'multiplicationTable\' está definida', () => {

   expect(multiplicationTable).toBeDefined();

});

test( 'Comprobar que hace hace el string de la tabla de 3 ', () => {

   expect(multiplicationTable(3)).toEqual(
      "<< Table of 3>>\n1 x 3 = 3\n2 x 3 = 6\n3 x 3 = 9\n4 x 3 = 12\n5 x 3 = 15\n6 x 3 = 18\n7 x 3 = 21\n8 x 3 = 24\n9 x 3 = 27\n10 x 3 = 30\n"
      );

});