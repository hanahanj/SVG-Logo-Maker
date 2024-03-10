const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const {Circle, Square, Triangle} = require('./shapes.js');


// array of prompts to generate logo
function prompts() {

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
if  (inquirerData.shape === 'Circle'){

    let shape = new Circle(inquirerData.name, inquirerData.textColor,inquirerData.shapeColor);
    // console.log(inquirerData);
    // console.log(shape);
    const logo = shape.render();
    console.log(logo);

fs.writeFile('logo.svg',logo, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
} else if (inquirerData.shape === 'Square'){
    let shape = new Square(inquirerData.name, inquirerData.textColor,inquirerData.shapeColor);
    // console.log(inquirerData);
    // console.log(shape);
    const logo = shape.render();
    console.log(logo);

fs.writeFile('logo.svg',logo, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

} else {
    let shape = new Triangle(inquirerData.name, inquirerData.textColor,inquirerData.shapeColor);
    // console.log(inquirerData);
    // console.log(shape);
    const logo = shape.render();
    console.log(logo);

fs.writeFile('logo.svg',logo, (err) =>
      err ? console.log(err) : console.log('Success!')
    );

}

  });



};

prompts();