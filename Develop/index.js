const inquirer = require('inquirer');
const fs = require('fs');

function init () {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the title of the project.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter the description of the project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose from following licensing options.',
        name: 'license',
        choices: ['GNU--AGPLv3', 'GNU--GPLv3', 'GNU--LGPLv3', 'Mozilla--Public--License--2.0', 'Apache--License--2.0', 'MIT--License', 'Boost--Software--License--1.0', 'The--Unlicense']
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your Email address.',
        name: 'email',
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMd(answers);
    
    fs.writeFile('README.md', mdPageContent, (err) =>
    err ? console.error(err) : console.log('Success!')
    );

  }
  );

const generateMd = ({title, description, installation, usage, contribution, test, license, username, email}) => {
    let licenseInfo = "";

    if (license === "GNU--AGPLv3") {
        licenseInfo = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
    } else if (license === "GNU--GPLv3") {
        licenseInfo = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
    } else if (license === "GNU--LGPLv3") {
        licenseInfo = "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work."
    } else if (license === "Mozilla--Public--License--2.0") {
        licenseInfo = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
    } else if (license === "Apache--License--2.0") {
        licenseInfo = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    } else if (license === "MIT--License") {
        licenseInfo = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    } else if (license === "Boost--Software--License--1.0") {
        licenseInfo = "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    } else if (license === "The--Unlicense") {
        licenseInfo = "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
    }
    return`# ${title} 
### ![badmath](https://img.shields.io/badge/license-"${license}"-green)
## Table of Content
1. [Description](#description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instructions](#test-instructions)
6. [License](#license)
7. [Questions](#questions)

## Description
- ${description}
## Installation Instructions
- ${installation}
## Usage Information
- ${usage}
## Contribution Guidelines
- ${contribution}
## Test Instructions
- ${test}
## License
- License: ${license}
- License Info: ${licenseInfo}
## Questions
- GitHub Profile: https://github.com/${username}
- Email: ${email}
`;

}
}

init()