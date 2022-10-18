const finalTeam = [];       // Array to store html content

// function to store Manager's card HTML code
const managerCard = manager => {
    let managerCardHtml = `
    <div class="card px-4" style="width: 350px; margin: 20px;">
    <div class="card-body">
      <h5 class="card-title">${data.manager.name}</h5>
      <p class="card-text"><i class="bi bi-cup-hot-fill"></i> ${data.manager.title}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.manager.id}</li>
      <li class="list-group-item">Email:<a href="mailto:${data.manager.email}" class="card-link">${data.manager.email}</a></li>
      <li class="list-group-item">Office number: ${data.manager.officeNumber}</li>
    </ul>
  </div>`;
  finalTeam.push(managerCardHtml) = managerCard;  //add card to final team roster
  return managerCard;
}

//function to store the Engineer's card HTML code
const engineerCard = engineer => {
    let engineerCardHtml = `
    <div class="card px-4" style="width: 350px; margin: 20px;">
    <div class="card-body">
      <h5 class="card-title">${data.engineer.name}</h5>
      <p class="card-text"><i class="bi bi-eyeglasses"></i> ${data.engineer.title}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${data.engineer.email}" class="card-link">${data.engineer.email}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${data.engineer.gitHub} target="_blank" " class="card-link">${data.engineer.gitHub}</a></li>
    </ul>
  </div>`;
  finalTeam.push(engineerCardHtml) = engineerCard;  //add card to final team roster
  return engineerCard;
}
// Function to store Interns card HTML code
const internCard = intern => {
    let internCardHtml = `
    <div class="card px-4" style="width: 350px; margin: 20px;">
    <div class="card-body">
      <h5 class="card-title">${data.intern.name}</h5>
      <p class="card-text"><i class="bi bi-mortarboard-fill"></i> ${data.intern.title}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${data.intern.email}" class="card-link">${data.intern.email}</a></li>
      <li class="list-group-item">GitHub: ${data.intern.school}</li>
    </ul>
  </div>`;
  finalTeam.push(internCardHtml) = internCard;
  return internCard;  //add card to final team roster
}

// HELPER FUNCTION: check with for loop what team members are beign created and if they are requested then add them
for (let i = 0; i < finalTeam.length; i++ ) {
  if(finalTeam[i].getRole() == "Manager") {
    return finalTeam.managerCard(i);
  }
  if (finalTeam[i],getRole() == "Engineer") {
    return finalTeam.engineerCard(i);
  }
  if(finalTeam[i].getRole == "Intern") {
    return finalTeam.intern(i);
  }
}

// This function will return the entire html file and will include the individual team functions
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
              <section>${managerCard(data.finalTeam)}</section>
              <section>${engineerCard(data.finalTeam)}</section>
              <section>${internCard(data.finalTeam)}</section>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <footer>
        </footer>
    </body>
</html>
    `;
}

module.exports = generateMarkdown;