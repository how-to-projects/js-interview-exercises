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


/**
 * Remove property from object
 */

const obj = {
    one:'1',
    two:'2',
    three:'3',
    four: '4'
}

delete obj.two;
console.log(obj);

/**
 * Write out individual characters from a string
 */

const individualChars = (val) => {

    /**Either of these will work */
    // return val.split('');

    const charArr = [];
    val.split('').forEach((char) => {
        charArr.push(char);
    })

    return charArr;
}

console.log(individualChars('shannon'));

const reverseString = (val) => {
    return val.split('').reverse().join('');
}

console.log(reverseString('shannon'));

const reverserWords = (val) => {
    const words = val.split(' ');
    const reverseWords = words.reverse();
    const reverseWordChars = reverseWords.map((itm, idx, arr) => {
        return itm.split('').reverse().join('');
    });

    return reverseWordChars.join(' ');
}

console.log(reverserWords('shannon is trying really hard right now'));

/**
 * Replace whitespace with underscores
 */

const replaceUnderscore = (val) => {

    /**Either of these will work */
    return val.replaceAll(' ', '_');

    // return val.split(' ').join('_');
}

console.log(replaceUnderscore('shannon is trying really hard right now'));

/**
 * Count the number of chars between a given character
 */

const countCharsBetween = (val, searchTerm) => {
    
    /**
     * If no searchTerm, then return the original value
     */
    if (!val.includes(searchTerm)) {
        return val;
    }

    /**
     * Get first and last index position of the searchTerm
     */
    const firstIndex = val.indexOf(searchTerm);
    const lastIndex = val.lastIndexOf(searchTerm);

    /**
     * If the first and last index are the same, then there's only one search term
     * otherwise, return chars between the last and first index
     */
    return firstIndex === lastIndex ? -1 : (lastIndex - firstIndex) - 1; 
}

console.log(countCharsBetween('xerox', 'x'))
console.log(countCharsBetween('there is a big moon waiting to be first', 't'));

/**
 * Truncate string
 */

const truncateString = (val, size) => {

    if (val.length < size) {return val;}

    return val.substr(0, size - 3) + '...';
}

console.log(truncateString('shannon', 5));

/**
 * Truncate words
 */
 const truncateWords = (val, size) => {

    if (val.length < size) { return val; }
    const words = val.split(' ');
    words.splice(size);
    
    return words.join(' ') + '...';
}

console.log(truncateWords('shannon is trying really hard today', 4));

/**
 * Return a list of items that contain at least one number
 */

const containsNum = (nums) => {

    return nums.filter((itm, idx, arr) => {
        /**
         * Use .test() to check for a reqular expression pattern
         */
        return /[0-9]/.test(itm); 

        /**
         * You can do the same with any regex pattern
         * Check for any items with a '.'
         */

         // return /[.]/.test(itm); 
    })
}

console.log(containsNum(['abc', 'abc10', 'ab3bcd', 'cdg.']));

/**
 * Check if a search term is at the beggining of a first name or
 * last name
 */

const checkNamePrefix = (name, prefix) => {

    /**Split name into an array */
    const arr = name.split(' ');

    /**First index should be the first name */
    const firstName = arr[0];

    /**Last index should be the last name, respectively */
    const lastName = arr[arr.length - 1];

    const firstPre = firstName.substr(0, prefix.length);
    const lastPre = lastName.substr(0, prefix.length);

    if (firstPre === prefix) { return `first name contains \'${prefix}\'`}
    else if (lastPre === prefix) { return `last name contains \'${prefix}\'`}
    else { return 'neither name contains the prefix' }
}

console.log(checkNamePrefix('shannon bruns', 'bru'));

/**
 * Chop string into equal parts
 */
const chopEqually = (val, maxSize) => {

    // const regEx = new RegExp(`.{1,6}`, 'g');
    const regExp = new RegExp(`.{1,${maxSize}}`, 'g');
    const arr = val.match(regExp);
    
    arr.map((itm, idx, arr) => {
        /**If there's a remainder, we want
         * to distribute the remiander(s) to 
         * the beginning of the array items
         */
        if (itm.length < maxSize) {
            const remainderCount = itm.length;

            /**If remainder is two, then distribute 
             * to the first two array items
            */
            for (let i =0; i < itm.length; i++) {

                /**Create a new string with the two items */
                const newString = arr[i] + itm[i];

                /**update original array item new string */
                arr[i] = newString;
            }

            /**Remove last array item that contained the remainders */
            arr.splice(arr.length - 1, 1);
          
        }
    })

   return arr
}

console.log(chopEqually('sdfaslflsfdlsfslfmfs', 3));