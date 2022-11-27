function generateHTML(team) { 
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Website</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" href="./favicon.ico" type="image/x-icon">
      </head>
      <body>
        <main>
        <nav>
          <h1>My Team</h1>
        </nav>
          <div class="card-group">
            <div class="card" style="width: 18rem;">
              <div class="card-header">
              ${team[0].name} - Manager
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[0].id}</li>
                <li class="list-group-item">Email: <a href="${team[0].email}"></a>${team[0].email}</li>
                <li class="list-group-item">Office Number: ${team[0].officeNumber}</li>
              </ul>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-header">
              ${team[1].name} - Engineer
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[1].id}</li>
                <li class="list-group-item">Email: <a href="${team[1].email}">${team[1].email}</a></li>
                <li class="list-group-item">Github: <a href="github.com/${team[1].github}">${team[1].github}</a></li>
              </ul>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-header">
              ${team[2].name} - Intern
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[2].id}</li>
                <li class="list-group-item">Email: <a href="${team[2].email}"></a>${team[2].email}</li>
                <li class="list-group-item">School: ${team[2].school}</li>
              </ul>
            </div>            
          </div>
        </main>
        <script src="index.js"></script>
      </body>
    </html>`
 
};

module.exports = generateHTML;