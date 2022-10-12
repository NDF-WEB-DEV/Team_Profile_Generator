const Employee = require('../lib/employee.js');  // Linking parent class

class Manager extends Employee {    //Caps to denote constructor
    constructor(name, id, email, officeNumber) {   
        super(name, id, email);     // Accessing properties of employee parent class 
        this.officeNumber = officeNumber;   // declaring additional property var not included in the parent class    
    }

    getOfficeNumber() {             // This was not included in the assignemnet sheet but I added it since it originates in the manager class
        return this.officeNumber;
    }

    getRole() {                     // Overridden to return Manager
        return "Manager";
    }
}

module.exports = Manager;           //Defines dependencies + modular format