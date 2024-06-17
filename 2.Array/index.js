class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  get(index) {
    if (index > this.length) return 'No such index!';
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    // this.pop();

    return firstItem;
  }

  unshift(val) {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = val;
  }

  delete(index) {
    const item = this.data[index];

    if (index < 0 || index > this.length) {
      console.log('There is no value in that index!');
      return;
    }

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;

    return item;
  }
}

const arr = new MyArray();

arr.push('Apple');
arr.push('Orange');
arr.push('Mango');
arr.push({ name: 'Kannan', age: '23' });

console.log(arr.pop());

console.log(arr.get(0));

arr.shift();

arr.unshift(9);

arr.delete(0);

console.log(arr);
