/**
 * Callback function - higher order function (stored like variables and used in arguments)
 */

const callbackTest = (prop) => {
    console.log('this is the callback fucntion ' + prop);
}

const callBackFun = (callback) => {
    setTimeout(() => {
        callback('called from another function!');
    },2000)
}

callBackFun(callbackTest);

/**
 * Have a function with no parameters, but 
 * pass params and print them out
 * 
 * *** Important - arrow function will not have an arguments object!
 */

function noParams() {
     console.log(arguments);
     for (let itm in arguments) {
         console.log(itm);
     }
}

// noParams('one', 'two', 'three');

/**
 * Write a funciton that only executes if the number of
 * arguments matches the number of parameters
 */

function matchParamCount(one, two) {
    if (matchParamCount.length === arguments.length) {
        console.log('arguments and param count match');
    } else {
        throw new Error('arguments and param count don\'t match');
    }

}

matchParamCount('one', 'two');

/**
 * Function with variable number of arguments
 */

const variableNumOfArgs = (...params) => {
    params.forEach((itm, idx, arr) => {
        console.log(itm);
    })
}

variableNumOfArgs('one', 'two', 'three', 'four');

/**
 * Write a program where hoisting can be seen
 */

const hoisting = () => {

    /**hoistParam is hoisted, but the value isn't, so
     * JS assigns undefined as the default value
     */
    hoist(hoistParam);

    function hoist(param) {
        console.log(`function is hoisted: ${param}`);
    }

    var hoistParam = 'something like this?';
}

hoisting();

/**
 * IIFE - Immediatly invoked funtion expression
 * Bonus, pass it parameters
 */
((paramOne, paramTwo) => {
    console.log(paramOne + '- ' + paramTwo())
})('hello', () => { return 'retrun, retrun, retrun'});

/**
 * Use an IIFE to execute an expression against a variable
 */
const randomNumber = function() {
    console.log(Math.floor(Math.random() * 100));
}();


/**
 * Default params, when one isn't passed in
 */

const defaultParams = (d = 'default param') => {
    console.log(d);
}

defaultParams();
defaultParams('getting a param');
defaultParams(undefined);

/**
 * Show usage of call, apply, bind
 */

const obj = {name:'shannon', role: 'engineer'};

function testFunction(paramOne, paramTwo) {

    console.log(this.name, paramOne, paramTwo);
}

/**
 * Call and apply invoke immediately
 */
testFunction.call(obj, 'one', 'two');
testFunction.apply(obj, ['1','2']);
/**
 * bind creates a new function with the context of the 1st argument
 * Use this when you want to call it later with a new contex
 */
testFunction.bind(obj, ['1','2']);

/**
 * Show a function that can be used as a constructor
 * 
 * This also cover protoypal inheritence
 */

function Employee(id) {
    this.id = id;
}

Employee.prototype.getSalary = () => {
    return this.salary;
}

Employee.prototype.setSalary = (val) => {
    this.salary = val;
}

const empl = new Employee(1);
empl.setSalary(1000);
console.log(empl.getSalary(), empl.id);

/**
 * Show how to create an object using a factory function
 */

function factoryFunction(username, password, isActive = false, isAdmin = false) {
    if (typeof username !== 'string' || typeof password !== 'string') {
        throw new Error('Invlid username or password');
    }

    return {
        username,
        password,
        isActive,
        isAdmin,
        created: new Date()
    }
}

console.log(factoryFunction('shannon', 'password'));

/**
 * Achieve prototypal inheritence
 * Achieve prototypal inheritence
 * Achieve prototypal inheritence
 * Achieve prototypal inheritence
 */

/**Create a parent class 
 * 
 * Can create with a function or
 * using 'Class'
*/
// class Parent {
//     constructor(name) {}
// }
function Parent(name) {
    this.name = name;
}

/**add a getName function to the parent class */
Parent.prototype.getName = function (){ 
    return this.name; 
}

/**Create a child class */
// class Child {
//     constructor(name) {
        
//     }
// }
function Child(name) {

    /**Call the parent class and assign the context of 
     * 'this' as the child class
     */
    Parent.call(this, name);
}

/**
 * Child class extends the Parent class,
 * by creating an object from Parent.prototype
 */
Child.prototype = Object.create(Parent.prototype);

/**Add getMyName function to child class */
Child.prototype.getMyName = function () {
    return this.name;
}

const chld = new Child('Child Name');
console.log('GetNyName from Child', chld.getMyName());
console.log('GetName from Child, inherited from parent', chld.getName());

const prnt = new Parent('Parent Name');
console.log('Parent name', prnt.getName())

function ChildChild(name) {
    Parent.call(this, name);
}

ChildChild.prototype = Object.create(Parent.prototype);
ChildChild.prototype.getChildChildName = function() {
    return this.name;
}

const childChild = new ChildChild('Great Grand Child');
childChild.getChildChildName();
console.log('Great Grand Child Name', childChild.name);

/**
 * Write a function to copy one object to another
 */

const obj1 = {one: 'one', two:'two', inner: {five: 'five'}};
const obj2 = {three: 'three', four:'four'};

const copyObj = (obj1, ob2) => {

    /**
     * Two ways to do thi
     */
    // return Object.assign(obj1, obj2);

    for (let key in obj1) {
        obj2[key] = obj1[key]
    }

    return obj2
}

console.log(copyObj(obj1, obj2));

