export class Zipper {
  constructor(node, trail = []) {
    this.node = node;
    this.trail = trail; // keeps track of path back to root
  }

  // Create zipper from tree
  static fromTree(tree) {
    return new Zipper(tree, []);
  }

  // Convert zipper back to full tree
  toTree() {
    let zipper = this;
    while (zipper.up() !== null) {
      zipper = zipper.up();
    }
    return zipper.node;
  }

  // Get current node value
  value() {
    return this.node.value;
  }

  // Move left
  left() {
    if (!this.node.left) return null;

    return new Zipper(this.node.left, [
      {
        direction: 'left',
        value: this.node.value,
        right: this.node.right,
      },
      ...this.trail,
    ]);
  }

  // Move right
  right() {
    if (!this.node.right) return null;

    return new Zipper(this.node.right, [
      {
        direction: 'right',
        value: this.node.value,
        left: this.node.left,
      },
      ...this.trail,
    ]);
  }

  // Move up
  up() {
    if (this.trail.length === 0) return null;

    const [parent, ...rest] = this.trail;

    if (parent.direction === 'left') {
      return new Zipper(
        {
          value: parent.value,
          left: this.node,
          right: parent.right,
        },
        rest
      );
    } else {
      return new Zipper(
        {
          value: parent.value,
          left: parent.left,
          right: this.node,
        },
        rest
      );
    }
  }

  // Update value
  setValue(value) {
    return new Zipper(
      {
        value,
        left: this.node.left,
        right: this.node.right,
      },
      this.trail
    );
  }

  // Update left child
  setLeft(left) {
    return new Zipper(
      {
        value: this.node.value,
        left,
        right: this.node.right,
      },
      this.trail
    );
  }

  // Update right child
  setRight(right) {
    return new Zipper(
      {
        value: this.node.value,
        left: this.node.left,
        right,
      },
      this.trail
    );
  }
}