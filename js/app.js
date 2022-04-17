/**
 * Overloading
 * 
 * Javascript doesn't allow function
 * overloading, instead you'd have to use a if/else
 * or switch/case statemtn
 */

const functionOverload = (param) => {
    if (typeof param === 'string') {
        // do something
    }
}

/**
 * Check if an item is an array
 * Three ways to do this
 */
const arr = [];

console.log(Array.isArray(arr));
console.log(arr instanceof Array)
console.log(Object.prototype.toString.call(arr) === '[object Array]' ? 'Is Array' : 'Not an array')

/**
 * Check if a number is an integer
 */

const isInteger = (num) => {
    /**
     * Get the remainder by dividing by 1 (modulo operator)
     */
    return num % 1 == 0;
}

console.log(isInteger(2));
console.log(isInteger(2.3));
console.log(isInteger(10));

/**
 * How to make a variable private
 * Hide it inside a function block - why?
 * var is function scoped, so var doesn't
 * leave the function
 * 
 * How to access it then? Create a closure -
 * wrap the var inside a function that is 
 * returned from an outer function, then declare
 * a variable outside of the function, var test 
 * is then kept alive by the closure and can be
 * accessed
 */
const privateVar = () => {

    // return () => {
        var test = 'I am private';
    //    return test;
    // }
    
}
// const testPrivate = privateVar();
// console.log(testPrivate());

/**
 * Find the vowels - find all the vowels in a string
 */

const findVowels = (string) => {

    const removeWhiteSpace = string.replace(/\s+/g, ''); // damn regex!
    console.log(removeWhiteSpace)

    /**
     * Create an array from the given string
     */
   const stringArr = string.split('');
   const vowels = ['a', 'e', 'i', 'o', 'u'];

   /**
    * Loop over the string array and check each
    * item to see if it's a vowel, if so, return it
    */

   const foundVowels = stringArr.filter((itm, idx, arr) => {
       return vowels.includes(itm);
   })

   // return foundVowels; // return all vowels found
   /**
    * If we wanted to find unique vowels, use set
    */
   return [...new Set(foundVowels)];
}

console.log(findVowels('there was a brown cow and the cow crapped its pants'));