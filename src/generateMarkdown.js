// Array to store html content
const finalTeam = [];       

// function to store Manager's card HTML code
function managerCard(manager) {
    let managerCardHtml = `
    <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text"><i class="bi bi-cup-hot-fill"></i> Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>`;
  // finalTeam.push(managerCardHtml);  //add card to final team roster
  return managerCardHtml;
}

//function to store the Engineer's card HTML code
function engineerCard(engineer) {
    let engineerCardHtml = `
    <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text"><i class="bi bi-eyeglasses"></i> ${engineer.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">${engineer.getGithub()}</a></li>
    </ul>
  </div>`;
  // finalTeam.push(engineerCardHtml);  //add card to final team roster
  return engineerCardHtml;
}
// Function to store Interns card HTML code
function internCard (intern) {
    let internCardHtml = `
    <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text"><i class="bi bi-mortarboard-fill"></i> ${intern.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
      <li class="list-group-item">GitHub: ${intern.getSchool()}</li>
    </ul>
  </div>`;
  // finalTeam.push(internCardHtml);
  return internCardHtml;  //add card to final team roster
}
// This function grabs the output from 3 team member functions and compiles it into the html array  
 function generateTeam (data) {
  let html = [];  // Array to store html content
    html.push(data  //inserting into array
      .filter(employee => employee.getRole() === "Manager")     // filter every role for manager
      .map(manager => managerCard(manager)).join("")            // creates card for every manager object
    );
    html.push(data
      .filter(employee => employee.getRole() === "Engineer")    // filter every role for Engineer
      .map(engineer => engineerCard(engineer)).join("")         // creates card for every Engineer object
    );
    html.push(data
      .filter(employee => employee.getRole() === "Intern")      // filter every role for intern
      .map(intern => internCard(intern)).join("")               // creates card for every intern object
    );
      return html.join(""); // adding final elements of the array as a string
  }

// This function will return the entire html file and will include the individual team functions from line 71
function generateMarkdown(data) {
    return `
    <!DOCTYPE html>
    <html lang = "en-US">
    <head>
        <title>Team Generator App</title>
        <meta charset="UTF-8" />
        <meta name="Description" content="A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.">
        <meta name="keyword" content="Team Generator App">
        <meta name="author" content="Nordleen De Frias">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" type="text/javascript" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class=" text-center display-4">MY TEAM</h1>
                </div>
              </div>
        </header>
        <main>
          <div class="container">
            <div class="row">
            ${generateTeam(data)}
            </div>
          </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <footer>
        </footer>
    </body>
</html>
    `;
};

module.exports = generateMarkdown;