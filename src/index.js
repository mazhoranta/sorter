class Sorter {
  constructor() {
    this.startArray = [];
    this.comparator = function(a, b) {
      return a - b;
    };
  }

  add(element) {
    this.startArray.push(element);
  }

  at(index) {
    return this.startArray[index];
  }

  get length() {
    return this.startArray.length;
  }

  toArray() {
    return this.startArray;
  }

  sort(indices) {
    var indicesCount = indices.length;
    for (var i = 0; i < indicesCount; i++) {
      for (var j = indicesCount - 1; j > i; j--) {
        if ( (this.comparator(this.startArray[indices[j - 1]], this.startArray[indices[j]]) > 0 && indices[j - 1] < indices[j])
          || (this.comparator(this.startArray[indices[j]], this.startArray[indices[j - 1]]) > 0 && indices[j - 1] > indices[j]) ) {
          var intermediateElement = this.startArray[indices[j - 1]];
          this.startArray[indices[j - 1]] = this.startArray[indices[j]];
          this.startArray[indices[j]] = intermediateElement;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;