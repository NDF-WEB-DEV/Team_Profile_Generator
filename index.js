const fs = require('fs)');              //File system library
const inquirer = require('inquirer');   //Inquirer library
var http = require('http');             //added reuired to display HTML file
var addMembersHere = [];                // array storing member information
const Manager = require('../lib/manager.js'); 

// MANAGER SECTION
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
        name: 'managerName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
        message: 'What is the team managers office telephone number?', 
        name: 'managerTelNumber',
        validate: telephoneVal => {  //returns boolean vals
            if(telephoneVal != true) { //check wrong first
                console.log('Please enter the team managers office telephone number to continue.');
                return false; 
            } else {
                return true;
            }
        }
    },
]).then((data) => {
    console.log(data);  // Print on console
    //Add manager's info to the manager object
    addMembersHere.push(data);  //insert into a collection array
    addMemberPromt();//ask we we want to add more members
});

//ENGINEER SECTION
var promptEngineer = inquirer.createPromptModule();
inquirer
.promptEngineer([
    {
        type: 'input',
        message: 'What is the engineer name?', 
        name: 'engineerName',
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
        name: 'engineerId',
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
        name: 'engineerEmail',
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
        name: 'engineerGithub',
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
    console.log(data);  // Print on console
    //Add manager's info to the manager object
    //insert into a collection array
    //ask we we want to add more members
});

//INTERN SECTION
var promtIntern = inquirer.createPromptModule();
inquirer
.promptIntern([
    {
        type: 'input',
        message: 'What is the intern name?', 
        name: 'internName',
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
        name: 'internId',
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
        name: 'internEmail',
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
        name: 'schoolName',
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
    console.log(data);  // Print on console
    //Add intern's info to the intern object
    //insert into a collection array
    addMemberPromt();//call function to ask we we want to add more members
});

//ADDING MEMBER SELECTION SECTION
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
        // 1- add teamMembers() to HTML file
        http.createServer(displayHtml).listen(8000);
        // 2- Then open HTML file using the HTTP method
        function displayHtml(request, response) {                                // incoming html info, 
            response.writeHead(200, {'content-type': 'text/js'});                //  200 ok status on requesting the js file              
            fs.readFile('./dist/render_html.js', null, fucntion(error, data) {   // reading the js index file 
                if (error) {                                                     // if there's an error trigger
                    response.writeHead(404);                                     // 404 code file not found
                    response.write('Oops! There seems to be a problem..');       // Message if error 404 is triggered         
                } else {
                    response.write(data),                                        //display data from file
                }
                response.end();                                                  //ends http response
        });
        }
    }
}
http.createServer(displayHtml).listen(8000);
init();