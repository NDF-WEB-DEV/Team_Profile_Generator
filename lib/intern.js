const Employee = require('../lib/employee.js');  // Linking parent class

class Intern extends Employee {     //Caps to denote constructor
    constructor(name, id, email, school) {
        super(name, id, email);     // Accessing properties of employee parent class
        this.school = school;       // declaring additional property var not included in the parent class
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";            // Overridden to return Intern
    }
}

module.exports = Intern;            //Defines dependencies + modular format