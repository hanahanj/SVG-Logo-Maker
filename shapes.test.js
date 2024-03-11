const {Circle, Square, Triangle} = require('./shapes.js');


// const shape = new Triangle();
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Circle Test', () => {
    it('should return true if a circular logo with the correct color, text and text color is not generated', () => {
        const shape = new Circle('ABC', 'White', 'Black' );
        const expectedCircle = `
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
             <circle cx="150" cy="100" r="80" fill="Black" />
             <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">ABC</text>
        </svg>
        `
        expect(shape.render()).toEqual(expectedCircle);

    });
  });