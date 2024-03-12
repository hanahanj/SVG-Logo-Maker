const {Circle, Square, Triangle} = require('./shapes.js');



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

describe('Square Test', () => {
it('should return true if a square logo with the correct color, text and text color is not generated', () => {
            const shape = new Square('ABC', 'White', 'Black' );
            const expectedSquare = `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="Black" />
<text x="150" y="180" font-size="100" text-anchor="middle" fill="White">ABC</text>
</svg>
`
expect(shape.render()).toEqual(expectedSquare);
    
        });
        
      });

describe('Triangle Test', () => {
it('should return true if a triangle logo with the correct color, text and text color is not generated', () => {
            const shape = new Triangle('ABC', 'White', 'Black' );
            const expectedSquare = `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="Black" />
<text x="150" y="130" font-size="40" text-anchor="middle" fill="White">ABC</text>
</svg>
`
        expect(shape.render()).toEqual(expectedSquare);
            
                });
                
              });