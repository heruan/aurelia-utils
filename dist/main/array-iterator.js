"use strict";
var ArrayIterator = (function () {
    function ArrayIterator(array) {
        this.array = array;
    }
    ArrayIterator.prototype.hasNext = function () {
        return this.array.length != 0;
    };
    ArrayIterator.prototype.next = function () {
        return this.array.shift();
    };
    return ArrayIterator;
}());
exports.ArrayIterator = ArrayIterator;

//# sourceMappingURL=array-iterator.js.map
