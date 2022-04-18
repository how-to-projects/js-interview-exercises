/**
 * Display all keys in an object
 */
const obj = {one: 'valone', two: 'valtwo', three:'valthree'};

for (let key in obj) {
    console.log(key);
}

console.log(Object.keys(obj))

/**
 * Display all values of an object
 */
 for (let key in obj) {
     if (obj.hasOwnProperty(key)){
        console.log(obj[key]);
     }
}
console.log(Object.values(obj))

/**
 * Write a function to check if an object is empty
 */

const isObjEmpty = (obj) => {
    return Object.keys(obj).length < 1 ? 'Object empty' : 'Object loaded';
}

console.log(isObjEmpty(obj));

/**
 * Create an object that is empty and has no prototype
 */

const noProtoObj = Object.create(null);

/**
 * Use Object.entries to create an object from key value pairs
 */
const objEntryArray = [[0, 'a'],[1, 'b'],[2, 'c']];
const objEntriesObj = Object.fromEntries(objEntryArray);

/**
 * Create an object with getter and setter properties
 */

const getSetObj = {
    _data: 'valOne',
    getVal: () => {
        return _data;
    },
    setVal: (val) => {
        _data = value;
    }
}

/**
 * Different options to prevent the modifications to an object
 */

Object.seal(obj);
Object.freeze(obj);
Object.isFrozen(obj);

/**
 * Show the creation of a regular expression
 * In Javascript regular expressions are an object
 */

const regEx = new RegExp('/[0-9]', 'g');

/**
 * Show the usage of static variable & function in a class and accessing it from the code
 */

class Browser {

    static className = 'Browser';

    constructor(os, browserName) {
        this.os = os;
        this.browserName = browserName;
    }

    static areTheyTheSameBrowsers = (browser1, browser2) => {
        return browser1 === browser2;
    }
}

const browser1 = new Browser('Linux', 'Chrome');
const browser2 = new Browser('Windows', 'Firefox');

console.log(Browser.className);
console.log(Browser.areTheyTheSameBrowsers(browser1, browser2));

/**
 * Write a class which uses private variable and private function
 */

class HasPrivates {
    #privateVar;
    publicVar;

    #privateFunc() {
        console.log('I\'m a private function');
    }

    publicFunc() {
        console.log('I\'m a public function');
    }
}

const instance = new HasPrivates();
instance.publicFunc();
// instance.privateFunc(); // throws an error

/**
 * Show inheritance with a Class
 */
class BaseClass {
    constructor(name) {
        this.name = name;
    }

    setState(obj) {
        this.state = obj;
        this.render();
    }

    addValues(props) {
        return props.reduce((a, b) => a + b);
    }
}

class Component extends BaseClass {
    constructor(name = '', props) {
        super(name); // super() is used to call parent class constructor
        this.state = { ...props };
    }

    addValues(...props) {
        const sum = super.addValues(props);
        this.setState({ sum, props });
    }

    render() {
        console.log(`sum of ${this.state.props} is ${this.state.sum}`);
    }
}

let component = new Component('UI Component');
component.addValues(3,5);
component.addValues(9,-4,3,5);

/**
 * Show how we can use a for..of loop to iterate on a range with given start and end values in an object
 */
//  let range = {
//     start: 1,
//     end: 10
// };

// for (let i of range) console.log(i); 

/**
 * Async / await
 * 
 * Async always returns a promise
 * await - makes javascript wait until the promise returns a result (calling json data)
 */
async function f(){
    return 1;
}
// f().then(alert);

async function ff() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })

    let result = await promise;

    alert(result);
}

ff();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();