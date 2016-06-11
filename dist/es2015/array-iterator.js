export class ArrayIterator {
    constructor(array) {
        this.array = array;
    }
    hasNext() {
        return this.array.length != 0;
    }
    next() {
        return this.array.shift();
    }
}
//# sourceMappingURL=array-iterator.js.map