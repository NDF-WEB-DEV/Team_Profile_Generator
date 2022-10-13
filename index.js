const fs = require('fs)');                      //File system library
const inquirer = require('inquirer');           //Inquirer library
var http = require('http');                     //added to display HTML file
var addMembersHere = [];                        // array storing member information
const Employee = require('./lib/employee');     // caps denotes linking class
const Manager = require('./lib/manager.js');    // caps denotes linking class
const Engineer = require('./lib/engineer.js');  // caps denotes linking class
const Intern = require('./lib/intern');         // caps denotes linking class
const generateMarkdown = require('./src/generateMarkdown.js');  //Helper code linked file

//------------------- MANAGER SECTION
var promptManager = inquirer.createPromptModule();
inquirer
.promptManager([
    {
        type: 'default',
        message: 'Welcome to the Team Generator',
        name: 'defaultMsg',
    },
    {
        type: 'input',
        message: 'What is the team managers name?', 
        name: 'name',
        validate: nameVal => {  //returns boolean vals
            if(nameVal != true) { //Check wrong first
                console.log('Please enter the Managers name to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the team managers employee ID number?', 
        name: 'id',
        validate: idVal => {  //returns boolean vals
            if(idVal != true) { //check wrong first
                console.log('Please enter the team managers employee ID number to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the team managers e-mail address?', 
        name: 'email',
        validate: emailVal => {  //returns boolean vals
            if(emailVal != true) { //check wrong first
                console.log('Please enter the team managers email address to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the team managers office number?', 
        name: 'officeNumber',
        validate: officeNumVal => {  //returns boolean vals
            if(officeNumVal != true) { //check wrong first
                console.log('Please enter the team managers office number to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
]).then((data) => {
    console.log(data);  // Print on console
    //Add manager's info to the manager object - line 6 + 76
    const manager = new Manager(data.name, data.title, data.id, data.email, data.officeNumber);  
    addMembersHere.push(data);  //insert into a collection array
    addMemberPromt();//ask we we want to add more members
});

//------------------- ENGINEER SECTION
var promptEngineer = inquirer.createPromptModule();
inquirer
.promptEngineer([
    {
        type: 'input',
        message: 'What is the engineer name?', 
        name: 'name',
        validate: nameVal => {  //returns boolean vals
            if(nameVal != true) { //Check wrong first
                console.log('Please enter the engineer name to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer employee ID number?', 
        name: 'id',
        validate: idVal => {  //returns boolean vals
            if(idVal != true) { //check wrong first
                console.log('Please enter the engineer employee ID number to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer e-mail address?', 
        name: 'email',
        validate: emailVal => {  //returns boolean vals
            if(emailVal != true) { //check wrong first
                console.log('Please enter the engineer e-mail address to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the engineer GitHub username?', 
        name: 'gitHub',
        validate: githubVal => {  //returns boolean vals
            if(githubVal != true) { //check wrong first
                console.log('Please enter the engineer GitHub username to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
]).then((data) => {
    console.log(data);                      // Print on console
    //Add engineer's info to the manager object - line 7 + 140
    const engineer = new Engineer(data.name, data.title, data.id, data.email, data.gitHub);  
    addMembersHere.push(engineer);              //insert into a collection array - see line 4
    addMemberPromt();                       //call function to ask we we want to add more members
});

//------------------- INTERN SECTION
var promtIntern = inquirer.createPromptModule();
inquirer
.promptIntern([
    {
        type: 'input',
        message: 'What is the intern name?', 
        name: 'name',
        validate: nameVal => {  //returns boolean vals
            if(nameVal != true) { //Check wrong first
                console.log('Please enter the intern name to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern employee ID number?', 
        name: 'id',
        validate: idVal => {  //returns boolean vals
            if(idVal != true) { //check wrong first
                console.log('Please enter the intern employee ID number to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern e-mail address?', 
        name: 'email',
        validate: emailVal => {  //returns boolean vals
            if(emailVal != true) { //check wrong first
                console.log('Please enter the intern email address to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the intern school name?', 
        name: 'school',
        validate: schoolVal => {  //returns boolean vals
            if(schoolVal != true) { //check wrong first
                console.log('Please enter the intern school name to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
]).then((data) => {
    console.log(data);                          // Print on console
    //Add intern's info to the intern object in line 8
    const intern = new Intern(data.name, data.title, data.id, data.email, data.school);  
    addMembersHere.push(intern);                  //insert into a collection array - see line 4
    addMemberPromt();                           //call function to ask we we want to add more members
});

//------------------- ADDING MEMBER SELECTION SECTION
var addMemberPromt = inquirer.createPromptModule();
inquirer
.addMemberPromt([
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

//not working!!
// .then((data) => {
//     if (choices === 'Engineer') {
//         promptEngineer();
//     } else if(choices === 'Intern') {
//         promptIntern();
//     } else {
//         // 1- add teamMembers() to HTML file and display the file in the browser
//         http.createServer(displayHtml).listen(8000);
//         // 2- Then open HTML file using the HTTP method
//         function displayHtml(request, response) {                                // incoming html info, 
//             response.writeHead(200, {'content-type': 'text/html'});              //  200 ok status on requesting the js file              
//             fs.readFile('./dist/team.html', null, function(error, data){        // reading the js index file 
//                 if (error) {                                                     // if there's an error trigger
//                     response.writeHead(404);                                     // 404 code file not found
//                     response.write('Oops! There seems to be a problem..');       // Message if error 404 is triggered         
//                 } else {
//                     response.write(data); 
//                     response.end();                                              //display data from file
//                 }                                                                //ends http response
//         });
//         }
//     }
// });
// http.createServer(displayHtml).listen(8000);