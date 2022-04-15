(() => {

})();

const integers = [1,2,3,4,5,6,7,8,9,10];
const alphas = ['b','a','f','t','u'];

const pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

const objectToLoop = {
one: {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    },
    two: {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    },
    three: {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    },
    four: {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    }
}

const pilots2 = [
{
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
},
{
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
},
{
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
},
{
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
}
]

/**
 * Slice - Returns elements in a new array. It selects the elements
 * starting at a given argument and ends at an option argument - if you 
 * omit the second argument then it selects till the end of the array
 * 
 * Slice won't mutate the original array
 */

    /**
     * Removes the first two items in the array and retrun them
     * in a new array, then stop
     */
    console.log('SLICE ONE', [1,2,3,4,5,6,7,8,9,10].slice(0, 3));

    /**
     * Removes items from zero to the fourth position and leave everything else to the end
     */
    console.log('SLICE TWO', [1,2,3,4,5,6,7,8,9,10].slice(4));

/**
 * Splice - insert, delete, replace
 */

    /**
     * Delete all but the first two items
     * 
     * Object.assign() - copy to new object, so we don't have the initial referrence
     */
    let remove = Object.assign([], integers);
    remove.splice(0, 2);
    console.log('Remove Items', remove); // returns [1,2]


    /**
     * Add items to an array
     * First argument is the index where to place the item
     * Seconod argument is zero, tells splice() to not delete anything
     */            
    let add = Object.assign([], integers);;
    add.splice(3 , 0, 'a', 'b', 'c');
    console.log('Add Items', add);

    /**
     * Replace an item in an array
     */
    let replace = Object.assign([], integers);
    replace.splice(7,1, 'Replaced, sucka');
    console.log('Replace Item', replace);

/**
 * For-In used to loop over object
 * 
 * For-Of used to loop over arrays
 */

    /**
     * Loop over array of objects and m
     */
    const pilotsForEach = pilots;
    pilotsForEach.forEach((item, index, arr) => {
        item.id = item.id + 'changed-Item-id';
    })

    console.log(pilotsForEach);

    /**
     * For-In
     */
    for (const key in objectToLoop) {
        const newId = objectToLoop[key].id + 'change-the-id';
        objectToLoop[key].id = newId;
        console.log('Looping over objects: ', key + ' : ' + objectToLoop[key].id);
    }

    /**
     * For-Of
     */
    for (const item of pilots) {
        console.log('Loop over arrays ', item.id);
    }

/**
 * Map, Reduce, Filter
 */
    /**
     * Map - create a new array of changed items from an array
     */
    const pilotsMap = pilots.map((item, index, arr) => {
        return item.id + index + 'changed';
    });

    // console.log(pilotsMap);

    /**
     * Filter - return an new array of filtered items
     */

    const pilotsFilter = pilots2.filter((pilot) => {
        return pilot.faction === 'Rebels';
    });

    // console.log(pilotsFilter);

    /**
     * Reduce - Executes a user supplied 'reducer' callback function of the array
     * 
     */

    // easy example of reduce - return the sum of all flying years
    const pilotTotalYearsOfService = pilots.reduce((acc, pilot) => {
        return acc + pilot.years;
    }, 0);

    console.log(pilotTotalYearsOfService);

   // find the pilot with the most years
   const pilotWithMostYears = pilots.reduce((acc, pilot) => {
       return (acc.years || 0) > pilot.years ? acc : pilot;
   }, 0);

   console.log(pilotWithMostYears);

/**
* Sort - sort an array (mutates)
* default sorting works well for alphabetical, but not
* great for numbers
*/
   /**
    * Sort an array of alpha characters
    */ 
   const sortAlphaArray = Object.assign([], alphas);
   sortAlphaArray.sort(); // sorts in ascending order

   /**
    * Reverse sortArray
    */
    sortAlphaArray.reverse(); // sort in descending order

   console.log('SORT ALPHA ARRAY ', sortAlphaArray);

   /**
    * sort array of numbers - need a comparison function
    */
   const sortIntArray = Object.assign([], integers);
   /**
    * sort in ascending order
    */
   sortIntArray.sort((a,b) => {
       return a - b;
   });

   /**
    * sort in descending order
    */
   sortIntArray.sort((a,b) => {
       return b - a;
   });

   console.log('SORT INT ARRAY ', sortIntArray);

/**
* Combine arrays
*/
   const combineArraySpread = [...integers, ...alphas];
   console.log('Combine Object Assign ', combineArraySpread);

   const combineArrayConcat = integers.concat(alphas);
   console.log('Combine Array Concat ', combineArrayConcat);






