//
const items = [1, 5, "Patrick", false, 5.12];

function Iterator(items) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index >= 0;
  },
  next: function () {
    return this.items[this.index--];
  },
};

const iter = new Iterator(items);

while (iter.hasNext()) {
  console.log(iter.next());
}
