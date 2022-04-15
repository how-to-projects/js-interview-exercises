/**
 * Taxes - write a function that take two arguments, an amout in dollars
 * and a tax percentage. Return an array with the tax amount in cents.
 * 
 * Return an array? Whatever, turd.
 * 
 * This is a good example of questioning the interviewer; why
 * they want you to return the value in an array, it doesn't make
 * sense. This is really the reason for the question, not to 
 * necessarily be able to solve it. 
 */

const taxAmountInCents = (amount, percent) => {

    const taxAmount = (amount * percent).toFixed(2);
    const taxAmountArr = [taxAmount];

    return taxAmountArr;
}

taxAmountInCents(250, .18);