const inquirer = require("inquirer");
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);
const employeeQuestions = require(`./src/employeeQuestions`)
const engineerQuestions = require(`./src/engineerQuestions`)
const internQuestions = require(`./src/internQuestions`)
const managerQuestions = require(`./src/managerQuestions`)
const generateHTML = require(`./dist/generateHTML`)

function writeToFile(team) {
    fs.writeFileSync(`index.html`, generateHTML(team))
}

function executeInquirers() {
    // array to push the team members into
    var team = [];

    function addManager() {
        inquirer.prompt(managerQuestions) 
        .then((data) => {
            const newManager = 
            new Manager (
                data.managerName,
                data.managerId,
                data.managerEmail,
                data.OfficeNumber
            )
            team.push(newManager);
            console.log(team);
            addMember();
        })
    }

    function addMember() {
        inquirer.prompt(employeeQuestions)
        .then((data) => {
            if (data.choice === "Engineer") {

            }
        })
    }

    function addEngineer() {
        
    }

    function addIntern() {

    }
}

executeInquirers();