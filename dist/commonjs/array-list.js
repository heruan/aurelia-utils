"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrayList = undefined;

var _arrayIterator = require("./array-iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayList = exports.ArrayList = function () {
    function ArrayList() {
        var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, ArrayList);

        this.array = array;
    }

    ArrayList.prototype.add = function add(e) {
        this.array.push(e);
        return true;
    };

    ArrayList.prototype.addAll = function addAll(c) {
        if (c.isEmpty()) {
            return false;
        } else {
            this.array.concat(c.toArray());
            return true;
        }
    };

    ArrayList.prototype.addAllAt = function addAllAt(index, c) {
        if (c.isEmpty) {
            return false;
        } else {
            var args = [index, 0];
            args.concat(c.toArray());
            Array.prototype.splice.apply(this.array, args);
            return true;
        }
    };

    ArrayList.prototype.addAt = function addAt(index, element) {
        this.array.splice(index, 0, element);
    };

    ArrayList.prototype.clear = function clear() {
        this.array.length = 0;
    };

    ArrayList.prototype.contains = function contains(e) {
        return this.array.indexOf(e) >= 0;
    };

    ArrayList.prototype.containsAll = function containsAll(c) {
        for (var _iterator = c.toArray(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var e = _ref;

            if (!this.contains(e)) {
                return false;
            }
        }
        return true;
    };

    ArrayList.prototype.get = function get(index) {
        return this.array[index];
    };

    ArrayList.prototype.indexOf = function indexOf(e) {
        return this.array.indexOf(e);
    };

    ArrayList.prototype.isEmpty = function isEmpty() {
        return this.array.length == 0;
    };

    ArrayList.prototype.iterator = function iterator() {
        return new _arrayIterator.ArrayIterator(this.array);
    };

    ArrayList.prototype.lastIndexOf = function lastIndexOf(e) {
        return this.array.lastIndexOf(e);
    };

    ArrayList.prototype.remove = function remove(e) {
        if (this.contains(e)) {
            this.array.splice(this.array.indexOf(e), 1);
            return true;
        } else {
            return false;
        }
    };

    ArrayList.prototype.removeAll = function removeAll(c) {
        var removed = false;
        for (var _iterator2 = c.toArray(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }

            var e = _ref2;

            removed = removed || this.remove(e);
        }
        return removed;
    };

    ArrayList.prototype.removeAt = function removeAt(index) {
        return this.array.splice(index, 1)[0];
    };

    ArrayList.prototype.retainAll = function retainAll(c) {
        var remove = this.array.filter(function (e) {
            return !c.contains(e);
        });
        var changed = false;
        for (var _iterator3 = remove, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var e = _ref3;

            changed = changed || this.remove(e) != null;
        }
        return changed;
    };

    ArrayList.prototype.set = function set(index, element) {
        return this.array.splice(index, 1, element)[0];
    };

    ArrayList.prototype.size = function size() {
        return this.array.length;
    };

    ArrayList.prototype.subList = function subList(fromIndex, toIndex) {
        return new ArrayList(this.array.slice(fromIndex, toIndex));
    };

    ArrayList.prototype.toArray = function toArray() {
        return this.array.slice();
    };

    ArrayList.prototype.toJSON = function toJSON() {
        return this.array;
    };

    return ArrayList;
}();