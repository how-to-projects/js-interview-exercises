/**
 * Fizzbuzz is a common interview task where the programmer
 * is asked to print number from 1 to 100 - when the number
 * is a multiple of three, print out 'Fuzz' and similarly
 * print out 'Buzz' for multiples of five. Lastly, print
 * out 'FizzBuzz' for multiples of three and five.
 */

const simpleApproach = () => {

    /**
     * Loop to increment to 100
     */
    for (let i = 0; i < 101; i++) {

        /**
         * '%' - modulus operator returns the remainder of 
         * an integer division
         */

            /**
             * Check if a number is divisible by 15,
             * if it is, print out 'fizzbuzz' 
             */
            if(i % 15 == 0) {
                console.log(i, 'fizzbuzz');
            }

            /**
             * Use 15 to see if it's divisible by 3
             */
            else if(i % 3 == 0) {
                console.log(i, 'fizz');
            }

            /**
             * Use 15 to see if it's divisible by 5
             */
            else if(i % 5 == 0) {
                console.log(i, 'buzz');
            } else {
                console.log(i);
    }
}

// simpleApproach();

const fancyApproach = () => {
    for (let i = 0; i < 101;) {
        console.log(
            (i++ % 3 ? '' : 'fizz') + 
            (i % 5 ? '' : 'buzz') 
            || i);
    }
}

fancyApproach();
