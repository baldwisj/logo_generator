const inquirer = require('inquirer');
const fs = require('fs');

const { Square, Triangle, Circle } = require('./lib/shapes.js');

const buildLogoSVG = (file, choice) => {
    let logo;
    logo = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    logo += `${choice.shape}`;


let logoShape;
if (choice.shape === 'Square'){
    logoShape = new Square();
} else if (choice.shape === 'Triangle'){
    logoShape = new Triangle();
} else (choice.shape === 'Circle'){
    logoShape = new Circle();
}

logoShape.colorChoice(choice.color);
const logoSVG = logoShape.render();

logo += logoSVG;
logo += '</svg>'

return logo
};

promptUser();