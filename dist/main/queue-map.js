"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueMap = (function () {
    function QueueMap(map) {
        this.map = map ? new Map(map.map) : new Map();
    }
    Object.defineProperty(QueueMap.prototype, "size", {
        get: function () {
            return this.map.size;
        },
        enumerable: true,
        configurable: true
    });
    QueueMap.prototype.clear = function () {
        this.map.clear();
    };
    QueueMap.prototype.delete = function (key) {
        return this.map.delete(key);
    };
    QueueMap.prototype.entries = function () {
        return this.map.entries();
    };
    QueueMap.prototype.forEach = function (callbackFn, thisArg) {
        return this.map.forEach(callbackFn, thisArg);
    };
    QueueMap.prototype.get = function (key) {
        return this.map.get(key);
    };
    QueueMap.prototype.has = function (key) {
        return this.map.has(key);
    };
    QueueMap.prototype.keys = function () {
        return this.map.keys();
    };
    QueueMap.prototype.set = function (key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        return this;
    };
    QueueMap.prototype.values = function () {
        return this.map.values();
    };
    QueueMap.prototype.toJSON = function () {
        return this.map;
    };
    return QueueMap;
}());
exports.QueueMap = QueueMap;

//# sourceMappingURL=queue-map.js.map
