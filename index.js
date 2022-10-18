const fs = require('fs');                      //File system library
const inquirer = require('inquirer');           //Inquirer library
var addMembersHere = [];                        // array storing member information
const Employee = require('./lib/employee');     // caps denotes linking class
const Manager = require('./lib/manager.js');    // caps denotes linking class
const Engineer = require('./lib/engineer.js');  // caps denotes linking class
const Intern = require('./lib/intern');         // caps denotes linking class
const generateMarkdown = require('./src/generateMarkdown.js');  //Helper code linked file
const { inherits } = require('util');

//------------------- MANAGER SECTION
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team managers name?', 
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team managers employee ID number?', 
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the team managers e-mail address?', 
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the team managers office number?', 
            name: 'officeNumber',
        }
    ])
    .then((data) => {
        console.log(data);              // Print questions on console
        const manager = new Manager(data.name, data.title, data.id, data.email, data.officeNumber);  // New manager object
        addMembersHere.push(manager);   //insert into a collection array
        addMembers();                   //ask if we want to add more members 
    });
} 

//------------------- ADDING MEMBER SELECTION SECTION
const addMembers = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMembers',
            message: 'What type of team member would you like to add?', 
            choices: ['Engineer','Intern','I am finished adding members']
        },
    ]).then((data) => {
        if(data.choices == 'Engineer') {
            engineerQuestions();
        } else if(data.choices == 'Intern') {
            internQuestions();
        } else(data.choices == 'I am finished adding members'); {
            generateHtmlFile(); 
        }
    });
};
    
//------------------- ENGINEER SECTION
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer name?', 
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the engineer employee ID number?', 
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the engineer e-mail address?', 
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer GitHub username?', 
            name: 'gitHub',
        },
    ]).then((data) => {
        console.log(data);                          // Print on console
        const engineer = new Engineer(data.name, data.title, data.id, data.email, data.gitHub);  // Engineer object created
        addMembersHere.push(engineer);              //insert into a collection array - see line 4
        addMembers();                               //call function to ask we we want to add more members
    });
}

//------------------- INTERN SECTION
const internQuestions = () => {
        inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern name?', 
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the intern employee ID number?', 
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the intern e-mail address?', 
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the intern school name?', 
            name: 'school',
        },
    ]).then((data) => {
        console.log(data);                          // Print on console
        const intern = new Intern(data.name, data.title, data.id, data.email, data.school);  
        addMembersHere.push(intern);                  //insert into a collection array - see line 4
        addMemberPrompt();                           //call function to ask we we want to add more members
    })
};


// Function that generates an HTML file
//write the file using the fs.write file function 
//First parameter is the path and name of the file to be produce
//The second parameter connects the ultility file to the data produced by answers
// Error catch : if no errors then message file is beign produced. 
const generateHtmlFile = () => {
            fs.writeFile('./dist/team.html', generateMarkdown(addMembersHere), err =>  
            err ? console.error(err) : console.log("Generating Team Members HTML file...")              
        )
};

managerQuestions();  // Call manager when starting over

        // TODO: Create a function to initialize app
        function init() {};

        // Function call to initialize app
        init();