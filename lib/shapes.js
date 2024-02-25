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
        return `<rect width="150" height="150" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points= '50,10 250,10 150,190' fill='${this.color}' />`;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="100 fill ="${this.color}" />`;
    }
}

module.exports = {Triangle, Square, Circle};