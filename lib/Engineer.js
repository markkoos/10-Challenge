const Employee = require(`Employee`);


class Engineer {
    constructor(github) {
        this.github = github;
    };

    getGithub() {

    };

    getRole() {
        return Engineer;
    };
}