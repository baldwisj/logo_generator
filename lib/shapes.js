class Shape {
    constructor() {
        this.color;
    }
    
    colorChoice(colorVar) {
        this.color=colorVar;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points= '35,250 275,250 155,0' fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="110" r="85" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Square, Circle};