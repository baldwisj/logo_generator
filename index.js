const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Triangle, Circle } = require('./lib/shapes.js');

const buildLogoSVG = (file, choices) => {
    let logo;
    logo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    logo += "<g>";
    logo += `${choices.shape}`;


    let logoShape;
    if (choices.shape === 'Square') {
        logoShape = new Square();
    } else if (choices.shape === 'Triangle') {
        logoShape = new Triangle();
    } else if (choices.shape === 'Circle') {
        logoShape = new Circle();
    }

    logoShape.colorChoice(choices.logoColor);
    const logoSVG = logoShape.render();

    logo += logoSVG;
    logo += `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${choices.textColor}">${choices.text}</text>`;
    logo += "</g>";
    logo += '</svg>'

    fs.writeFile(file, logo, (error) => {
        error ? console.log('Unable to create file') : console.log('logo.svg has been created');
    });
    
};

const clientPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter up to three characters for logo.",
            name: "text",
            validate: function (input) {
                if (isNaN(input) && input.length > 1 && input.length < 3) {
                    return 'Please enter one, two, or three characters.';
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Please enter color key or hex value for text color.",
            name: "textColor",
            validate: function (input) {
                const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if (!input.match(hexColorRegex) && !isColorKeyword(input)) {
                    return 'Please enter a valid color keyword or hex value.';
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Please choose your desired logo shape.",
            choices: ["Square", "Triangle", "Circle"],
            name: "shape",
        },
        {
            type: "input",
            message: "Please enter color key or hex value for logo color.",
            name: "logoColor",
            validate: function (input) {
                const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if (!input.match(hexColorRegex) && !isColorKeyword(input)) {
                    return 'Please enter a valid color keyword or hex value.';
                }
                return true;
            }

        },
    ])
        .then((choices) => {
            buildLogoSVG("logo.svg", choices);
        });
}

const isColorKeyword = (input) => {
    const colorKeywords = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
    return colorKeywords.includes(input.toLowerCase());
}

clientPrompt();