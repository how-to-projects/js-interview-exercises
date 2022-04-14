import DataModule from './data.js';

/**
 * Example of hoisting
 * 
 * Vehicle object is being used before it's declared -
 * the Vehicle object is being 'hoisted' to the top of the 
 * function scope
 */
function functionHoisting(one, two) {
   
    let car = new Vehicle("Honda", "white", "2010", "UK");

    console.log( 'One ' + one, 'TWO ' + two);
    console.log('CAR ', car);
    console.log('NAME ', this.Name);
    
    function Vehicle(model, color, year, country) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.country = country;
    }
}

/**
 * Example of using call - could use bind or apply as well
 * Call - can pass additional properties, separated by commas
 * Apply - same as call, but passes parameters in an array
 * Bind - Returns a function - functionHoisting.bind(DataModule.CallObject)()
 */
functionHoisting.call(DataModule.CallObject, 'tst one', 'tst two');