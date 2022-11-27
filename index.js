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

function executeInquirers() {

    // creates the html file with team object
    function writeToFile(team) {
        fs.writeFileSync(`index.html`, generateHTML(team))
    }

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
            );
            team.push(newManager);
            console.log(team);
            addMember();
        })
    }

    function addMember() {
        inquirer.prompt(employeeQuestions)
        .then((data) => {
            if (data.choice === "Engineer") {
                addEngineer();
                return;
            } if (data.choice === "Intern") {
                addIntern();
                return;
            } else {
                writeToFile(team);
                return;
            }
        })
    }

    function addEngineer() {
        inquirer.prompt(engineerQuestions)
        .then((data) => {
            const newEngineer = 
            new Engineer (
                data.engineerName,
                data.engineerID,
                data.engineerEmail,
                data.engineerGithub
            );
            team.push(newEngineer);
            console.log(team);
            addMember();
        })
    }

    function addIntern() {
        inquirer.prompt(internQuestions)
        .then((data) => {
            const newIntern = 
            new Intern (
                data.internName,
                data.internID,
                data.internEmail,
                data.internSchool
            );
            team.push(newIntern);
            console.log(team);
            addMember();
        })
    }

    addManager();
}

executeInquirers();