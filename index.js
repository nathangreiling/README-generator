//Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")



//an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("Project title is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Project description is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installations",
        message: "Provide the installations required with your project.",
        
    },
    {
        type: "input",
        name: "usage",
        message: 'Describe the use for your project.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please provide usage for your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "How should contributions to this project be done?",
        validate: contribution => {
            if (contribution) {
                return true;
            } else {
                console.log("Please provide contribution info.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Provide instructions on how to test your project.",
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log("Please provide test instructions.");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "licensing",
        message: "Choose a license for your project",
        choices: ["Apache", "MIT", "GNU General Public", "Mozilla-Public", "Common Development and Distribution", "Eclipse", "None"],
        validate: licensing => {
            if (licensing) {
                return true;
            } else {
                console.log("Please choose a license option for this project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log("Your GitHub username is required.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "If you wish, provide your email for the README:",
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err);
            return;
        } console.log("Success!")
    });
};

//function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {
        console.log(userInput);
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
