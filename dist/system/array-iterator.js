"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ArrayIterator;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("ArrayIterator", ArrayIterator = function () {
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
            }());

            _export("ArrayIterator", ArrayIterator);
        }
    };
});