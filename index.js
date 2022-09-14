const inquirer = require("inquirer");
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const employeeQuestions = require(`./src/employeeQuestions`)
const engineerQuestions = require(`./src/engineerQuestions`)
const internQuestions = require(`./src/internQuestions`)
const managerQuestions = require(`./src/managerQuestions`)
const generateHTML = require(`./dist/generateHTML`)



async function executeInquirers() {
    var teamMembers = []
    const addManager = await inquirer.prompt(managerQuestions) 
        .then((data) => {
            teamMembers += JSON.stringify(data);
            console.log(teamMembers);
        })
    const addEmployee = await inquirer.prompt(employeeQuestions) 
        .then((data) => {
            if (data.choice === `Engineer`) {
                async function addEngineer() {
                 const engineer = await inquirer.prompt(engineerQuestions)
                    .then((data) => {
                        teamMembers += JSON.stringify(data);
                        async function employeeAgain() {
                            await inquirer.prompt(employeeQuestions)
                            .then((data) => {
                                JSON.stringify(data);
                                if (data.choice === `Engineer`) {
                                    async function addEngineer() {
                                     const engineer = await inquirer.prompt(engineerQuestions)
                                        .then((data) => {
                                            teamMembers += JSON.stringify(data);
                                            async function employeeAgain() {
                                                await inquirer.prompt(employeeQuestions)
                                                .then((data) => {
                                                    teamMembers += JSON.stringify(data);
                                                    console.log(teamMembers);
                                                })
                                            }
                                            employeeAgain();
                                        })
                                    }
                                    addEngineer();
                                } else if (data.choice === `Intern`) {
                                    async function addIntern() {
                                        await inquirer.prompt(internQuestions)
                                        .then((data) => {
                                            teamMembers += JSON.stringify(data);
                                            async function employeeAgain() {
                                                await inquirer.prompt(employeeQuestions)
                                                .then((data) => {
                                                    teamMembers += JSON.stringify(data);
                                                    console.log(teamMembers);
                                                })
                                            }
                                            employeeAgain();
                                        })
                                    }
                                    addIntern();
                                } else {
                                    console.log(`Exiting program`);
                                    console.log(teamMembers);
                                    async function writeToFile() {
                                        await fs.writeFileSync(`index.html`, generateHTML(data))
                                    }
                                    writeToFile();
                                }
                            })
                        }
                        employeeAgain();
                    })
                }
                addEngineer();
            } else if (data.choice === `Intern`) {
                async function addIntern() {
                    await inquirer.prompt(internQuestions)
                    .then((data) => {
                        teamMembers += JSON.stringify(data);
                        async function employeeAgain() {
                            await inquirer.prompt(employeeQuestions)
                            .then((data) => {
                                JSON.stringify(data);
                                if (data.choice === `Engineer`) {
                                    async function addEngineer() {
                                     const engineer = await inquirer.prompt(engineerQuestions)
                                        .then((data) => {
                                            teamMembers += JSON.stringify(data);
                                            async function employeeAgain() {
                                                await inquirer.prompt(employeeQuestions)
                                                .then((data) => {
                                                    teamMembers += JSON.stringify(data);
                                                    console.log(teamMembers);
                                                })
                                            }
                                            employeeAgain();
                                        })
                                    }
                                    addEngineer();
                                } else if (data.choice === `Intern`) {
                                    async function addIntern() {
                                        await inquirer.prompt(internQuestions)
                                        .then((data) => {
                                            teamMembers += JSON.stringify(data);
                                            async function employeeAgain() {
                                                await inquirer.prompt(employeeQuestions)
                                                .then((data) => {
                                                    teamMembers += JSON.stringify(data);
                                                    console.log(teamMembers);
                                                })
                                            }
                                            employeeAgain();
                                        })
                                    }
                                    addIntern();
                                } else {
                                    console.log(`Exiting program`);
                                    console.log(teamMembers);
                                    async function writeToFile() {
                                        await fs.writeFileSync(`index.html`, generateHTML(teamMembers))
                                    }
                                    writeToFile()
                                }
                            })
                        }
                        employeeAgain();
                    })
                }
                addIntern();
            } else {
                console.log(`Exiting program`);
                console.log(teamMembers);
                async function writeToFile() {
                    await fs.writeFileSync(`index.html`, generateHTML(teamMembers))
                }
                writeToFile()
            }
        })
}

executeInquirers();