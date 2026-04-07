// @ts-check

// 1️⃣ Size (constructor function - prototype syntax)
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};


// 2️⃣ Position (constructor function - prototype syntax)
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};


// 3️⃣ ProgramWindow (class syntax)
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();       // default 80x60
    this.position = new Position(); // default 0,0
  }

  resize(newSize) {
    // Minimum size = 1
    let width = Math.max(1, newSize.width);
    let height = Math.max(1, newSize.height);

    // Maximum allowed based on screen & position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(width, maxWidth);
    this.size.height = Math.min(height, maxHeight);
  }

  move(newPosition) {
    // Minimum position = 0
    let x = Math.max(0, newPosition.x);
    let y = Math.max(0, newPosition.y);

    // Maximum allowed based on size
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(x, maxX);
    this.position.y = Math.min(y, maxY);
  }
}


// 4️⃣ changeWindow function
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}