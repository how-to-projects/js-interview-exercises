class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(val) {
        this.name = val;
    }
}

class NewUser extends User{
    constructor(name) {
        super(name);
    }
}

const newUser = new NewUser('shannon');
console.log('Get new user name', newUser.getName());
console.log('Set new user name', newUser.setName('Jill'));
console.log('Get new user name, again', newUser.getName());

class PersonOne {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return 'the name is: ' + this.name;
    }
}

const personTwo = new PersonOne('Person Two');
console.log(personTwo.getName());

/**
 * Prototypal inheritence
 */
function Person(name) {
    this.personName = name;
    this.health = 100;

    this.walking = () => {
        console.log(this.personName + ' is walking');
    }

    this.getHealth = () => {
        return this.health;
    }

     this.setHealth = (val) => {
        this.health = val;
    }
}

const shannon = new Person('shannon');
shannon.setHealth(101);
console.log('shannon\'s health', shannon.getHealth());
shannon.walking();

Person.prototype.isSleeping = function() {
    console.log(this.personName + ' is sleeping');
}

shannon.isSleeping();


const closureTest = () => {
    let count = 0;

    return () => {
        return count += 1;
    }
}

const runCounter = () => {
    const incrementCount = closureTest();

    for (let i = 0; i < 10; i++) {
        console.log('increment', incrementCount())
    }
}

runCounter();