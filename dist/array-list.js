"use strict";
var array_iterator_1 = require("./array-iterator");
var ArrayList = (function () {
    function ArrayList(array) {
        if (array === void 0) { array = []; }
        this.array = array;
    }
    ArrayList.prototype.add = function (e) {
        this.array.push(e);
        return true;
    };
    ArrayList.prototype.addAll = function (c) {
        if (c.isEmpty()) {
            return false;
        }
        else {
            this.array.concat(c.toArray());
            return true;
        }
    };
    ArrayList.prototype.addAllAt = function (index, c) {
        if (c.isEmpty) {
            return false;
        }
        else {
            var args = [index, 0];
            args.concat(c.toArray());
            Array.prototype.splice.apply(this.array, args);
            return true;
        }
    };
    ArrayList.prototype.addAt = function (index, element) {
        this.array.splice(index, 0, element);
    };
    ArrayList.prototype.clear = function () {
        this.array.length = 0;
    };
    ArrayList.prototype.contains = function (e) {
        return this.array.indexOf(e) >= 0;
    };
    ArrayList.prototype.containsAll = function (c) {
        for (var _i = 0, _a = c.toArray(); _i < _a.length; _i++) {
            var e = _a[_i];
            if (!this.contains(e)) {
                return false;
            }
        }
        return true;
    };
    ArrayList.prototype.get = function (index) {
        return this.array[index];
    };
    ArrayList.prototype.indexOf = function (e) {
        return this.array.indexOf(e);
    };
    ArrayList.prototype.isEmpty = function () {
        return this.array.length == 0;
    };
    ArrayList.prototype.iterator = function () {
        return new array_iterator_1.ArrayIterator(this.array);
    };
    ArrayList.prototype.lastIndexOf = function (e) {
        return this.array.lastIndexOf(e);
    };
    ArrayList.prototype.remove = function (e) {
        if (this.contains(e)) {
            this.array.splice(this.array.indexOf(e), 1);
            return true;
        }
        else {
            return false;
        }
    };
    ArrayList.prototype.removeAll = function (c) {
        var removed = false;
        for (var _i = 0, _a = c.toArray(); _i < _a.length; _i++) {
            var e = _a[_i];
            removed = removed || this.remove(e);
        }
        return removed;
    };
    ArrayList.prototype.removeAt = function (index) {
        return this.array.splice(index, 1)[0];
    };
    ArrayList.prototype.retainAll = function (c) {
        var remove = this.array.filter(function (e) { return !c.contains(e); });
        var changed = false;
        for (var _i = 0, remove_1 = remove; _i < remove_1.length; _i++) {
            var e = remove_1[_i];
            changed = changed || this.remove(e) != null;
        }
        return changed;
    };
    ArrayList.prototype.set = function (index, element) {
        return this.array.splice(index, 1, element)[0];
    };
    ArrayList.prototype.size = function () {
        return this.array.length;
    };
    ArrayList.prototype.subList = function (fromIndex, toIndex) {
        return new ArrayList(this.array.slice(fromIndex, toIndex));
    };
    ArrayList.prototype.toArray = function () {
        return this.array.slice();
    };
    ArrayList.prototype.toJSON = function () {
        return this.array;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
