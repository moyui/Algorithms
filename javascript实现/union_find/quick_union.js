class UF {
  constructor() {
    this.id;//分量id
    this.count;//分量数量
  }

  UF(N) {
    this.count = N;
    this.id = new Array(N);
    for (let i = 0 ; i < N; i++) {
      this.id[i] = i;
    }
  }

  count() {
    return this.count;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}