const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Triangle, Circle } = require('./lib/shapes.js');

const buildLogoSVG = (file, choices) => {
    let logo;
    logo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    logo += `${choices.shape}`;


    let logoShape;
    if (choices.shape === 'Square') {
        logoShape = new Square();
    } else if (choices.shape === 'Triangle') {
        logoShape = new Triangle();
    } else (choices.shape === 'Circle'){
        logoShape = new Circle();
    }

    logoShape.colorChoice(choices.logoColor);
    const logoSVG = logoShape.render();

    logo += logoSVG;
    logo += '</svg>'

    return logo
};
const clientPrompt = () => {
    inquirer.prompt([
        {
            type: "imput",
            message: "Enter up to three characters for logo.",
            name: "text",
            validate: function (input) {
                if (isNaN(input || input.length > 3)) {
                    return 'Please enter one, teo, or three characters.';
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Please enter color key or hex value for text color.",
            name: "text Color",
        },
        {
            type: "list",
            message: "Please choose your desired logo shape.",
            choices: ["Square, Triangle, Circle"],
            name: "shape",
        },
        {
            type: "input",
            message: "Please enter color key or hex value for logo color.",
            name: "logoColor",

        },
    ])
        .then((choices) => {
            clientPrompt();
    writeTofile("logo.svg", choices);
});
}

promptUser();