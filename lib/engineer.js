const Employee = require("employee.js");  // Linking parent class

class Engineer extends Employee {  // Caps to denote constructor
    constructor(name, id, email, gitHub) {
        this.gitHub = gitHub;       // declaring additional property var not included in the parent class
        super(name, id, email)      // Accessing properties of employee parent class  
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";          //Overridden to return Engineer
    }
}

module.exports = Engineer;          //Defines dependencies + modular format