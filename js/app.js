/**
 * Palindrome - a word, phrase, or sequence that reads
 * the same forward or backward. e.g., madam, mom, nurses run
 */

/**
 * Test if the value given is a palindrome - probably many ways to do this,
 * but I think this is one of the simpliest - could use RegEx or somethihg like that
 * 
 * This method could be simplified, but expanding it for clarity 
 * 
 * @param val - value to test for palindrome 
 * @returns boolean if the given value is the same forward and back
 */
const isPalindrome = (val) => {

    /**
     * Remove any whitespace
     */
    const removeWhiteSpace = val.replace(' ', '');
    
    /**
     * create an array from string charactes
     */
    const splitStringToArray = removeWhiteSpace.split('');

    /**
     * Reverse the array
     */
    const reverseArray = splitStringToArray.reverse();

    /**
     * Create a string from the reverse array
     */
    const reversedString = reverseArray.join('');

    /**
     * Check if the original value, minuse the white space is
     * equal to the newly created reversed string
     */
    if (reversedString === removeWhiteSpace) {
        return true;
    }

    return false;
}

console.log(isPalindrome('nurses run'));