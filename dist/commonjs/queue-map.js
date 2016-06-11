"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueueMap = exports.QueueMap = function () {
    function QueueMap() {
        _classCallCheck(this, QueueMap);

        this.map = new Map();
    }

    QueueMap.prototype.clear = function clear() {
        this.map.clear();
    };

    QueueMap.prototype.delete = function _delete(key) {
        return this.map.delete(key);
    };

    QueueMap.prototype.entries = function entries() {
        return this.map.entries();
    };

    QueueMap.prototype.forEach = function forEach(callbackFn, thisArg) {
        return this.map.forEach(callbackFn, thisArg);
    };

    QueueMap.prototype.get = function get(key) {
        return this.map.get(key);
    };

    QueueMap.prototype.has = function has(key) {
        return this.map.has(key);
    };

    QueueMap.prototype.keys = function keys() {
        return this.map.keys();
    };

    QueueMap.prototype.set = function set(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        return this;
    };

    QueueMap.prototype.values = function values() {
        return this.map.values();
    };

    QueueMap.prototype.toJSON = function toJSON() {
        return this.map;
    };

    _createClass(QueueMap, [{
        key: "size",
        get: function get() {
            return this.map.size;
        }
    }]);

    return QueueMap;
}();