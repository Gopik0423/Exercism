export class InvalidInputError extends Error {
  constructor(message) {
    super(message || 'Invalid Input');
  }
}

const DIRECTIONS = ['north', 'east', 'south', 'west'];

export class Robot {
  constructor() {
    this._x = 0;
    this._y = 0;
    this._bearing = 'north';
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return [this._x, this._y];
  }

  place({ x, y, direction }) {
    if (
      typeof x !== 'number' ||
      typeof y !== 'number' ||
      !DIRECTIONS.includes(direction)
    ) {
      throw new InvalidInputError();
    }

    this._x = x;
    this._y = y;
    this._bearing = direction;
  }

  evaluate(instructions) {
    for (let command of instructions) {
      switch (command) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
        default:
          throw new InvalidInputError();
      }
    }
  }

  turnLeft() {
    const index = DIRECTIONS.indexOf(this._bearing);
    this._bearing = DIRECTIONS[(index + 3) % 4];
  }

  turnRight() {
    const index = DIRECTIONS.indexOf(this._bearing);
    this._bearing = DIRECTIONS[(index + 1) % 4];
  }

  advance() {
    switch (this._bearing) {
      case 'north':
        this._y += 1;
        break;
      case 'east':
        this._x += 1;
        break;
      case 'south':
        this._y -= 1;
        break;
      case 'west':
        this._x -= 1;
        break;
    }
  }
}
