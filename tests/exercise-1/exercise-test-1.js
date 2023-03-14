
/**
 * 
 * @param {Number<Integer>} myNumber 
 * @returns {Number<Integer>}
 */
function multiplicationTable( myNumber ){

   // Message errors
   if( arguments.length === 0 || myNumber === null ) {
      console.error('No number has been entered.');
      return;
   }

   if( typeof(myNumber) !== 'number' || !Number.isInteger(myNumber)){
      console.error(`${myNumber} was sent, which is not a numeric or integer type`);
      return;
   }

   // Table
  let res = `<< Table of ${myNumber}>>\n`;
   
   for( let i = 1; i <= 10; i++ ) {
      res += `${i} x ${myNumber} = ${i * myNumber}\n`;
   }

   return res;

}

module.exports = multiplicationTable;