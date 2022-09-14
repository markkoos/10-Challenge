const employeeQuestions = [
    {
    type: `list`,
    name: `choice`,
    message: `Add another employee or finish building the team`,
    choices: [
        {
            name: `Engineer`,
            value: `Engineer`,
        },
        {
            name: `Intern`,
            value: `Intern`,
        },
        {
            name: `Finish`,
            value: `Finish`,
        }
    ]
}]

module.exports = employeeQuestions;