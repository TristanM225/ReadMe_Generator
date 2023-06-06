const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, screenshot, credit, license, github, email, badges, features, contribution, tests }) =>
  `# ${title}

  ## Description
  
  ${description}
  
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
![your image!](/assets/images/${screenshot})
      
  
  ## Credits
  
  ${credit}
  
  ## License
  
  ${license}
  

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## Features
  
  ${features}
  
  ## Contribute
  
${contribution}
  
  ## Tests
  
 ${tests}
  
  ## Questions
  
  - https://github.com/${github}/
  - ${email}
  
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:\nExamples\nWhy did you make it\nWhat problem does it solve \nWhat did you learn',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How would a user install your Project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your project used for?',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Add picture name',
    },
       {
      type: 'input',
      name: 'credit',
      message: 'Give credit where credit is due!',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license?',
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0","MIT License,BSD 2-Clause Simplified License","BSD 3-Clause New or Revised License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"],
      },
      {
        type: 'input',
        name: 'features',
        message: 'List your features',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Write any tests for your code',
      },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },
  ])
  .then((answers) => {
    const reammePageContent = generateREADME(answers);

    fs.writeFile('README.md', reammePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });

