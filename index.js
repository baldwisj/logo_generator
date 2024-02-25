//Install the packages we need to run this program
const inquirer = require('inquirer');
const fs = require('fs');

//Import the shape classes that we defined in the shapes.js file
const { Square, Triangle, Circle } = require('./lib/shapes.js');

//The following function initiates various code to create the sting that is the SVG
const buildLogoSVG = (file, choices) => {
    //The following adds code to the logo variable which we will use to create the SVG
    let logo;
    logo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    logo += "<g>";
    logo += `${choices.shape}`;

    //This dertermines which shape was selected by the user
    let logoShape;
    if (choices.shape === 'Square') {
        logoShape = new Square();
    } else if (choices.shape === 'Triangle') {
        logoShape = new Triangle();
    } else if (choices.shape === 'Circle') {
        logoShape = new Circle();
    }

    //The following adds the color into the shape SVG string and then adds it to the sections created above
    logoShape.colorChoice(choices.logoColor);
    const logoSVG = logoShape.render();

    //the final peices of the SVG are added
    logo += logoSVG;
    logo += `<text x="150" y="130" text-anchor="middle" font-size="60" fill="${choices.textColor}">${choices.text}</text>`;
    logo += "</g>";
    logo += '</svg>'

    //A new file is created where the logo SVG is pushed to
    fs.writeFile(file, logo, (error) => {
        error ? console.log('Unable to create file') : console.log('logo.svg has been created');
    });
    
};

//The prompt function is created and the prompt is initiated
const clientPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter up to three characters for logo.",
            name: "text",
            validate: function (input) {
                //Added stipulation of up to 3 characters
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
                //regex added to determine if an entered value is a valid hex value or color keyword
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
                //regex added to determine if an entered value is a valid hex value or color keyword
                const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                if (!input.match(hexColorRegex) && !isColorKeyword(input)) {
                    return 'Please enter a valid color keyword or hex value.';
                }
                return true;
            }

        },
    ])
    //Once the prompt is answered the then function will call the function the peice together the SVG with the given choices
        .then((choices) => {
            buildLogoSVG("logo.svg", choices);
        });
}
//the following creates a list of the possible color keywords
const isColorKeyword = (input) => {
    const colorKeywords = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
    return colorKeywords.includes(input.toLowerCase());
}

clientPrompt();