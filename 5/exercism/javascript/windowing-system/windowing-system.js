// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export class Size {
  constructor(width=80, height=60) {
    this.width = width;
    this.height = height;
    this.resize = (newWidth, newHeight) => {
      this.width = newWidth;
      this.height = newHeight;
    };
  }
  
}

export class Position {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
    this.move = (newX, newY) => {
      this.x = newX;
      this.y = newY;
    };
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  } 
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    const clippedWidth = Math.min(Math.max(1, newSize.width), maxWidth);
    const clippedHeight = Math.min(Math.max(1, newSize.height), maxHeight);
    this.size.width = clippedWidth;
    this.size.height = clippedHeight;
  }
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const clippedX = Math.min(Math.max(0, newPosition.x), maxX);
    const clippedY = Math.min(Math.max(0, newPosition.y), maxY);
    this.position.x = clippedX;
    this.position.y = clippedY;
  }

}

export function changeWindow(window) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  
  window.resize(newSize);
  window.move(newPosition);
  
  return window;
}