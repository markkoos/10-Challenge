const inquirer = require("inquirer");
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const employeeQuestions = require(`./src/employeeQuestions`)
const engineerQuestions = require(`./src/engineerQuestions`)
const internQuestions = require(`./src/internQuestions`)
const managerQuestions = require(`./src/managerQuestions`)
const generateHTML = require(`./dist/generateHTML`)

function writeToFile(team) {
    fs.writeFileSync(`index.html`, generateHTML(team))
}

function executeInquirers() {
    var teamMembers = []
    const addManager = inquirer.prompt(managerQuestions) 
        .then((data) => {
            teamMembers += JSON.stringify(data);
            console.log(teamMembers);
        })
}

executeInquirers();