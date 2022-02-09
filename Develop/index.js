// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title for your project?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location',
      },
      {
        type: 'input',
        name: 'bio',
        message: 'Please enter your bio',
      },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
