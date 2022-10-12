const Employee = require("../lib/employee.js");  // Linking parent class
const Engineer = require("../lib/engineer.js")

class Engineer extends Employee {  // Caps to denote constructor
    constructor(name, id, email, gitHub) {
        super(name, id, email)      // Accessing properties of employee parent class  
        this.gitHub = gitHub;       // declaring additional property var not included in the parent class
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";          //Overridden to return Engineer
    }
}

module.exports = Engineer;          //Defines dependencies + modular format