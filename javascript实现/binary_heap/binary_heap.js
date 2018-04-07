class MaxPQ {
  constructor() {
    this.heap = [];
    this.n = 0;
  }

  insert (value) {
    this.n += 1;
    this.heap[this.n] = value;
    this._swim[this.n];
  }

  delMax () {
    this.heap[1] = this.heap[this.n];
    this.heap[this.n] = null;
    this.n -= 1;
    this._sink(1);
  }

  _swim (k) {
    while(k > 1) {
      var p = Math.floor(k /2); //找上一级父节点
      if (this.heap[k] > this.heap[p]) { //上浮
        [this.heap[k], this.heap[p]] = [this.heap[p], this.heap[k]];
        k = p;
      }
    }
  }

  _sink(k) {
    while (2*k < this.n) {
      let j = 2 * k;//左子树
      if (this.heap[k] >= this.heap[j] && this.heap[k] >= this.heap[j + 1]) {
        return;
      }
      if (thia.heap[j] < thia.heap[j+1]) { //找右结点
          j+=1;
      }
      [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
      k = j;
    }
  }
}