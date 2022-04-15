/**
 * Closures
 */

/**
 * Example of closure
 * 
 * - Outer function 'count' is executed, creating an
 *   instance of the inner function, the inner function 
 *   exposes the variable counter, which is in its parent's
 *   scope.
 * 
 * - We call the inner function from outside the scope in 
 *   which it was declared. We did that by returning the 
 *   inner function from the outer onr and storing a 
 *   reference to it, named 'incrementCount,' to call it
 * 
 * - When the incrementCount function finishes running, normally
 *   we would expect all of its variables to be garbage collected.
 *   We'd experct each counter to go away when the function is done,
 *   but they don't, because of a Closure.
 * 
 * - Since the inner function instances are still alive (assigned to incrementCount),
 *   the closure is still preserving the counter variables.
 * 
 * @returns addCount function
 */
const count = () => {

    let counter = 0;

    return () => {
        counter += 1;
        return counter;
    }
  
}

/**
 * Execute count function
 */
const runCounter = () => {

    const incrementCount = count();

    /**
     * Quick loop, just so we can test this easier
     */
    for(let i = 0; i < 5; i++) {
        console.log('INCREMENT COUNT ', incrementCount());
    }
}

runCounter();

const countWithParams = (val) => {

    if (!val) { return };

    let counter = 0;

    return () => {
        counter += val;
        return counter;
    }
}

/**
 * Closure example with a parameter
 */
const executeCountWithParams = () => {

    const add = countWithParams(2);
    
    for(let i = 0; i < 5; i++) {
        console.log('COUNT WITH PARAMS ', add(i));
    }
}

executeCountWithParams();
