/**
 * Prototypal inheritance
 *  All inheritance in JS is prototypal, where you add new types or variables using object.prototype...
 *      Employee.prototype.Person.prototype.name = 'shannon'
 * 
 * JavaScript doesn't technically have classes - constructor functions are used instead
 */

/**
 * Generic default constructor function, Person class
 */
function Person(name) {
    
    this.name = name;

    /**Priavte variable, denoted with the '_' */
    this._health = 100;

    this.walking = () => {
        console.log(this.name + ' is walking');
    }

    this.getHealth = () => {
        return this._health;
    }

    this.setHealth = (health) => {
        this._health = health;
    }
}


/**
 * Extend the Person class
 * 
 * Call the constructor of the class using 'new'
 */
 let shannon = new Person('Shannon');
    shannon.setHealth(100);
    shannon.walking();

    console.log('HEALTH ' , shannon.getHealth());

/**
 * Dynamically add a new function and variable to the Person class using prototype
 */
Person.prototype.sleepType = 'deep';
Person.prototype.sleep = () => {
    console.log(shannon.name + ' is sleeping ' + shannon.sleepType);
}

/**
 * shannon extends the Person class, so we have access
 * to the dynamically added method 'sleep'
 */
shannon.sleep();
