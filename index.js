const fs = require('fs');                      //File system library
const inquirer = require('inquirer');           //Inquirer library
// var http = require('http');                     //added to display HTML file
var addMembersHere = [];                        // array storing member information
const Employee = require('./lib/employee');     // caps denotes linking class
const Manager = require('./lib/manager.js');    // caps denotes linking class
const Engineer = require('./lib/engineer.js');  // caps denotes linking class
const Intern = require('./lib/intern');         // caps denotes linking class
const generateMarkdown = require('./src/generateMarkdown.js');  //Helper code linked file
const { inherits } = require('util');

//------------------- MANAGER SECTION
var promptManager = inquirer.prompt([
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
    console.log(data);  // Print on console
    //Add manager's info to the manager object - line 6 + 76
    promptManager = new Manager(data.name, data.title, data.id, data.email, data.officeNumber);  
    addMembersHere.push(promptManager);  //insert into a collection array
    addMemberPrompt();//ask if we want to add more members
});

// //------------------- ADDING MEMBER SELECTION SECTION
var addMemberPrompt = inquirer.prompt([
    {
        type: 'list',
        message: 'What type of team member would you like to add?', 
        choices: ['Engineer','Intern','I am finished adding members'],
        name: 'teamMemberOptions',
    },
]).then((data) => {
    if (choices === 'Engineer') {
        promptEngineer();
    } else if(choices === 'Intern') {
        promptIntern();
    } else {
        console.log(data);  //print the data on console
        //write the file using the fs.write file function 
        //First parameter is the path and name of the file to be produce
        //The second parameter connects the ultility file to the data produced by answers
        fs.writeFile('./dist/team.html', generateMarkdown(data), err =>  
        // Error catch : if no errors then message file is beign produced.  
        err ? console.error(err) : console.log("Generating Team Members HTML file...")
    )}
});


//------------------- ENGINEER SECTION
var promptEngineer = inquirer.prompt([
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
    console.log(data);                      // Print on console
    //Add engineer's info to the manager object - line 7 + 140
    const engineer = new Engineer(data.name, data.title, data.id, data.email, data.gitHub);  
    addMembersHere.push(engineer);              //insert into a collection array - see line 4
    // addMemberPrompt();                       //call function to ask we we want to add more members
});

//------------------- INTERN SECTION
var promptIntern = inquirer.prompt([
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
    //Add intern's info to the intern object in line 8
    const intern = new Intern(data.name, data.title, data.id, data.email, data.school);  
    addMembersHere.push(intern);                  //insert into a collection array - see line 4
    addMemberPrompt();                           //call function to ask we we want to add more members
});


