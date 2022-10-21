const fs = require('fs') // File system library
const inquirer = require('inquirer') // Inquirer library
const addMembersHere = [] // array storing member information
const Manager = require('./lib/manager.js') // caps denotes linking class
const Engineer = require('./lib/engineer.js') // caps denotes linking class
const Intern = require('./lib/intern') // caps denotes linking class
const generateMarkdown = require('./src/generateMarkdown.js') // Helper code linked file

function init () {
  // ------------------- MANAGER SECTION
  function managerQuestions() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'managerName'
      },
      {
        type: 'input',
        message: 'What is the team managers employee ID number?',
        name: 'managerId'
      },
      {
        type: 'input',
        message: 'What is the team managers e-mail address?',
        name: 'managerEmail'
      },
      {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'managerOfficeNumber'
      }
    ]).then(data => {
        console.log(data); // Print questions on console
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber); // New manager object
        addMembersHere.push(manager); // insert into a collection array
        console.log(addMembersHere);
        addMembers(); // From Manager ask if we want to add more members 
      });
  };

  // ------------------- ADDING MEMBER SELECTION SECTION
  function addMembers() {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'addMembers',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I am finished adding members']
      }
    ]).then(data => {
      if (data.addMembers == 'Engineer') {
        engineerQuestions();
      } else if (data.addMembers == 'Intern') {
        internQuestions();
      } else {
        generateHtmlFile();
      }
        // DID NOT WORK!
        // switch (data.choices) {
        //   case "Engineer":
        //     engineerQuestions();
        //     break;
        //   case "Intern":
        //     internQuestions();
        //   default:
        //     generateHtmlFile();
        //     break;
        // };
      // console.log(data)
      // if (data.choices == 'Engineer') {
      //   engineerQuestions();
      // } else if {
      //   internQuestions();
      // };
    });
  };

  // ------------------- ENGINEER SECTION
  function engineerQuestions() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the engineer name?',
        name: 'engineerName'
      },
      {
        type: 'input',
        message: 'What is the engineer employee ID number?',
        name: 'engineerId'
      },
      {
        type: 'input',
        message: 'What is the engineer e-mail address?',
        name: 'engineerEmail'
      },
      {
        type: 'input',
        message: 'What is the engineer GitHub username?',
        name: 'engineerGithub'
      }
    ]).then(data => {
      console.log(data); // Print on console
      const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub); // Engineer object created
      addMembersHere.push(engineer); // insert into a collection array - see line 4
      console.log(addMembersHere);
      addMembers(); // from - engineers call function to ask we we want to add more members
    })
  };

// ------------------- INTERN SECTION
  function internQuestions() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the intern name?',
        name: 'internName'
      },
      {
        type: 'input',
        message: 'What is the intern employee ID number?',
        name: 'internId'
      },
      {
        type: 'input',
        message: 'What is the intern e-mail address?',
        name: 'internEmail'
      },
      {
        type: 'input',
        message: 'What is the intern school name?',
        name: 'internSchool'
      }
    ]).then(data => {
      console.log(data); // Print on console
      const intern = new Intern(data.internName, data.internId, data.internEmail, data.InternSchool);  //intern object
      addMembersHere.push(intern); // insert into a collection array - see line 4
      console.log(addMembersHere);
      addMembers(); // From interns - call function to ask we we want to add more members
    })
  };

  // Function that generates an HTML file
  // write the file using the fs.write file function 
  // First parameter is the path and name of the file to be produce
  // The second parameter connects the ultility file to the data produced by answers
  // Error catch : if no errors then message file is beign produced. 
  const generateHtmlFile = () => {
    fs.writeFile('./dist/team.html', generateMarkdown(addMembersHere), err => 
    err ? console.error(err) : console.log('Generating Team Members HTML file...'))
  };

  managerQuestions(); // Call manager when starting over
};

init();
