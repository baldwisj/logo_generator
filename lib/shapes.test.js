//this imports the various shapes classes defined in shapes.js
const {Square, Triangle, Circle} = require('./shapes.js');

//this runs a test to see if there are any problems in our functionality that would prevent a aqua square from being created
describe('Square test', () => {
    test('testing for an aqua square', () => {
        const shape = new Square();
        shape.colorChoice('aqua');
        const svgS = `<rect x="75" y="40" width="150" height="150" fill="aqua" />`
        expect(shape.render()).toEqual(svgS);
    });
});
//this runs a test to see if there are any problems in our functionality that would prevent a black triangle from being created
describe('Triangle Test', () => {
    test('testing for a black triangle', () => {
        const shape = new Triangle();
        shape.colorChoice('black');
        const svgT = `<polygon points= '35,250 275,250 155,0' fill="black" />`
        expect(shape.render()).toEqual(svgT);
    });
});

//this runs a test to see if there are any problems in our functionality that would prevent a purple circle from being created
describe('Circle Test', () => {
    test('testing for a purple circle', () => {
        const shape = new Circle();
        shape.colorChoice('purple');
        const svgC = `<circle cx="150" cy="110" r="85" fill="purple" />`
        expect(shape.render()).toEqual(svgC);
    });
});
