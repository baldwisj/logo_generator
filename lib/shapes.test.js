const {Square, Triangle, Circle} = require('./shapes.js');

describe('Square test', () => {
    test('testing for an aqua square', () => {
        const shape = new Square();
        shape.colorChoice('aqua');
        const svgS = `<rect x="75" y="40" width="150" height="150" fill="aqua" />`
        expect(shape.render()).toEqual(svgS);
    });
});
describe('Triangle Test', () => {
    test('testing for a black triangle', () => {
        const shape = new Triangle();
        shape.colorChoice('black');
        const svgT = `<polygon points= '35,250 275,250 155,0' fill="black" />`
        expect(shape.render()).toEqual(svgT);
    });
});
describe('Circle Test', () => {
    test('testing for a purple circle', () => {
        const shape = new Circle();
        shape.colorChoice('purple');
        const svgC = `<circle cx="150" cy="110" r="85" fill="purple" />`
        expect(shape.render()).toEqual(svgC);
    });
});
