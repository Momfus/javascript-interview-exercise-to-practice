/**
 * 
 * @param {String} str 
 * @returns {String} str but reverse
 */
function reverseString( str ) {
   return str.split('').reverse().join('');
}

/**
 * 
 * @param {String} word 
 * @returns {Boolean}
 */
function palindrome( word ) {

   // Error message
   if( typeof(word) !== 'string' ) {
      return console.error("The input isn't a string");
   }
   
   word = word.trim(); // Remote initial and end spaces

   if(word.length == 0){
      return console.error("The input is empty (with only spaces)");
   }

   if( /\s/.test(word) ) { // Check if has an empty space in some place in the string
      return console.error(`The word '${word}' must not have spaces`);
   }

   // Reverse

   word = word.toLowerCase();
   let inverseWord = reverseString(word);

   return (word === inverseWord);
}

module.exports = palindrome;