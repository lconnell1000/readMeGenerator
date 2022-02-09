// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title for your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project ',
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'Please select which license you are using for your project ',
        choices: ["GNU 2", "GNU 3", "MIT", "Apache License 2"],
      },
      {
        type: "input",
        name: "contribution",
        message: "Please enter contribution guidelines for your project",
      },
      {
        type: "input",
        name: "tests",
        message: "Please enter any test instructions for your project ",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Please enter your Github username ",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address ",
      },
    ])
.then((data) => {
    if (data.license === "GNU 2") {
        var badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    }

    else if (data.license === "GNU 3") {
        var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }

    else if (data.license === "MIT") {
        var badge =  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }

    else {
        var badge =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    const readMe = `
    # ${data.title}

    ${badge}
    (click on badge for license info)

    ## Description

    ${data.description}

    ## Table of Contents

    1. [Installation](#installation)
    2. [Usage Information]($usage)
    3. [License](#license)
    4. [Contribution](#contribution)
    5. [Testing](#testing)
    6. [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    license for application: ${data.license} ${badge}

    ## Contibution

    ${data.contribution}

    ## Testing

    ${data.tests}

    ## Questions

    If you have any further questions about this project, please feel free to contact me on my
    [GitHub Account](https://github.com/${data.gitHub}) or on my [email](mailto:${data.email}).

    `;
    fs.writeFile('README.md', readMe, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success, README.md Created!');
    });
})
