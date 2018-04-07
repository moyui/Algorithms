class Stack {
  constructor() {
    this.arr = [];
    this.size = 0;
  }
  push (el) {
    this.arr[this.size++] = el;
  }

  pop () {
    return this.arr[--this.size];
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
}
