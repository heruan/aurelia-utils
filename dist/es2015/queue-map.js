export class QueueMap {
    constructor() {
        this.map = new Map();
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
    delete(key) {
        return this.map.delete(key);
    }
    entries() {
        return this.map.entries();
    }
    forEach(callbackFn, thisArg) {
        return this.map.forEach(callbackFn, thisArg);
    }
    get(key) {
        return this.map.get(key);
    }
    has(key) {
        return this.map.has(key);
    }
    keys() {
        return this.map.keys();
    }
    set(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        return this;
    }
    values() {
        return this.map.values();
    }
    toJSON() {
        return this.map;
    }
}
//# sourceMappingURL=queue-map.js.map