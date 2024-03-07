const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
// const generateLogo = require('generateLogo.js');

// array of prompts to generate logo
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter up to three characters for your logo. Ex: ABC',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be? Enter either a color keyword or hexidecimal number.',
      },
  {
    type: 'list', 
    name: 'shape',
    message: 'What shape would you like to use for your logo',
    choices: ['Circle','Square', 'Triangle' ],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color should the shape be? Enter either a color keyword or hexidecimal number.',
  },

  
  
])
.then((inquirerData) => {

const filename = `logo.svg`;
//writes README
fs.writeFile(filename, generateLogo(inquirerData, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });