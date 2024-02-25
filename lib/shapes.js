//This creates a shape class with a constructor to set an initial state of color
class Shape {
    constructor() {
        this.color;
    }
    //This takes the shosen color an places it in the colorVar variable to be used in tests
    colorChoice(colorVar) {
        this.color=colorVar;
    }
}
//This extends the shape class with another class called square
class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}

//This extends the shape class with another class called triangle
class Triangle extends Shape {
    render() {
        return `<polygon points= '35,250 275,250 155,0' fill="${this.color}" />`;
    }
}
//This extends the shape class with another class called circle
class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="110" r="85" fill="${this.color}" />`;
    }
}

//this exports the shape classes to be used in other files in this program
module.exports = {Triangle, Square, Circle};