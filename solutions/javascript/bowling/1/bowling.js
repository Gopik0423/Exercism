export class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    // Basic validations
    if (pins < 0) {
      throw new Error('Negative roll is invalid');
    }

    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    // Cannot roll after game is complete
    if (this.isGameOver()) {
      throw new Error('Cannot roll after game is over');
    }

    // Frame validation (except 10th frame handled separately)
    const rolls = this.rolls;
    let frame = 0;
    let i = 0;

    while (frame < 9 && i < rolls.length) {
      if (rolls[i] === 10) {
        i += 1;
      } else {
        i += 2;
      }
      frame++;
    }

    // If we are still before 10th frame
    if (frame < 9) {
      if (
        rolls.length % 2 === 1 &&
        rolls[rolls.length - 1] !== 10 &&
        rolls[rolls.length - 1] + pins > 10
      ) {
        throw new Error('Pin count exceeds pins on the lane');
      }
    }

    // 10th frame validation
    else {
      const tenthFrame = rolls.slice(i);

      if (tenthFrame.length === 1) {
        if (tenthFrame[0] !== 10 && tenthFrame[0] + pins > 10) {
          throw new Error('Pin count exceeds pins on the lane');
        }
      }

      if (tenthFrame.length === 2) {
        if (
          tenthFrame[0] === 10 &&
          tenthFrame[1] !== 10 &&
          tenthFrame[1] + pins > 10
        ) {
          throw new Error('Pin count exceeds pins on the lane');
        }
      }
    }

    this.rolls.push(pins);
  }

  score() {
    if (!this.isGameOver()) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    let total = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] === 10) {
        // Strike
        total += 10 + this.rolls[i + 1] + this.rolls[i + 2];
        i += 1;
      } else if (this.rolls[i] + this.rolls[i + 1] === 10) {
        // Spare
        total += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        // Open frame
        total += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }

    return total;
  }

  isGameOver() {
    let frame = 0;
    let i = 0;

    while (frame < 9 && i < this.rolls.length) {
      if (this.rolls[i] === 10) {
        i += 1;
      } else {
        i += 2;
      }
      frame++;
    }

    // If less than 9 frames completed → not over
    if (frame < 9) return false;

    const remaining = this.rolls.slice(i);

    if (remaining.length < 2) return false;

    // Open frame
    if (remaining[0] + remaining[1] < 10) {
      return remaining.length === 2;
    }

    // Spare
    if (remaining[0] + remaining[1] === 10) {
      return remaining.length === 3;
    }

    // Strike
    if (remaining[0] === 10) {
      if (remaining.length < 3) return false;

      if (remaining[1] === 10) {
        return remaining.length === 3;
      } else {
        return remaining.length === 3;
      }
    }

    return false;
  }
}