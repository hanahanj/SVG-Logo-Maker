const {Circle, Square, Triangle} = require('./shapes.js');


// const shape = new Triangle();
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Password Length', () => {
    it('should return false for password less than 8 characters long', () => {
        const shape = new Circle('`1', '`1', '`1' );
    
        expect(shape.render()).toEqual(`
        <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
          <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>
        `);
    });
  });