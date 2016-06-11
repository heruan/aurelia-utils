define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ArrayIterator = exports.ArrayIterator = function () {
        function ArrayIterator(array) {
            _classCallCheck(this, ArrayIterator);

            this.array = array;
        }

        ArrayIterator.prototype.hasNext = function hasNext() {
            return this.array.length != 0;
        };

        ArrayIterator.prototype.next = function next() {
            return this.array.shift();
        };

        return ArrayIterator;
    }();
});