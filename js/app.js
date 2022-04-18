/**
 * Create arrays
 */

const arrLiteral = [];
const arrConstructor = new Array();
const arrPredefinedSlots = new Array(10);
const arrWithValues = [1,2,3];
const arrConstWithValues = new Array(1,2,3);

/**
 * Iterate over array and output the values
 */
const arr = [1,2,3,4,5];
arr.forEach((itm, idx, arr) => {
    // console.log(itm);
})

for (let i in arr) {
    console.log('for..in', arr[i]);
}

/**
 * Append / prepend items
 */
const arrAppend = [2,3];

/**
 * Add to end of array
 */
arrAppend.push('end1', 'end2');

/**
 * Add to beginning of array
 */
arrAppend.unshift('start1', 'start2');

/**
 * Remove from start of array
 */
console.log('remove from start:', arrAppend.shift());

/**
 * Remove from end of array
 */
console.log('remove from end:', arrAppend.pop());

/**
 * Use a spread opperator
 */
const spreadArr = [5,6,7,8];
arrAppend.push(...spreadArr)
console.log(arrAppend);

/**
 * Using splice to remove or add or update items
 */
const spliceArr = [1,2,3];

/**
 * Remove one item from array
 */
// spliceArr.splice(2,1);486748

/**
 * Remove all items after selected
 */
// spliceArr.splice(1);

/**
 * Add item to second index position
 * 
 * Start at index 2, zero means don't delete - add everything after that
 */
spliceArr.splice(2, 0, 44, 45)

console.log('splice array', spliceArr);

/**
 * Different ways to empty an array
 */

const emptyArr = [1,2,3];
// emptyArr = [];
// emptyArr.length = 0;
// emptyArr.splice(0, emptyArr.length);
while(emptyArr.length) {
    emptyArr.pop();
}
console.log('emptyArr', emptyArr);

/**
 * Check if item is an array
 */
console.log('Is an array', emptyArr instanceof Array);
console.log('Is an array', Array.isArray(emptyArr));

/**
 * Check for item in array
 */

const checkItemInArray = [1,2,3,4,5,6,7,8,9,10];
console.log('Is Item in array', checkItemInArray.includes(4)); // true

/**
 * Create a set
 */
const setOne = new Set([1,2,3,4])
const set = new Set();
set.add(1);
set.add(true);
set.add("text");
set.add(1);

console.log(set);

/**
 * Iterate over a set
 */
for (let i of set) {
    console.log('set item', i);
}

/**
 * Create a map
 */
const map = new Map([[1, 100], [true, false], ['a', 'b']]);
console.log('map', map);

/**
 * Iterate over a map
 */
for (let i of map) {
    console.log('map item', i[0], i[1]);
}

/**
 * Remove duplicates in an array
 * 
 * Use a Set, because a Set doesn't allow duplicates
 */
const dupArr = [1,2,3,4,5,6,6];
const uniqueArr = [...new Set(dupArr)];
console.log(uniqueArr);

