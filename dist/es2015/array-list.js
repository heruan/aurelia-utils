import { ArrayIterator } from "./array-iterator";
export class ArrayList {
    constructor(array = []) {
        this.array = array;
    }
    add(e) {
        this.array.push(e);
        return true;
    }
    addAll(c) {
        if (c.isEmpty()) {
            return false;
        }
        else {
            this.array.concat(c.toArray());
            return true;
        }
    }
    addAllAt(index, c) {
        if (c.isEmpty) {
            return false;
        }
        else {
            let args = [index, 0];
            args.concat(c.toArray());
            Array.prototype.splice.apply(this.array, args);
            return true;
        }
    }
    addAt(index, element) {
        this.array.splice(index, 0, element);
    }
    clear() {
        this.array.length = 0;
    }
    contains(e) {
        return this.array.indexOf(e) >= 0;
    }
    containsAll(c) {
        for (let e of c.toArray()) {
            if (!this.contains(e)) {
                return false;
            }
        }
        return true;
    }
    get(index) {
        return this.array[index];
    }
    indexOf(e) {
        return this.array.indexOf(e);
    }
    isEmpty() {
        return this.array.length == 0;
    }
    iterator() {
        return new ArrayIterator(this.array);
    }
    lastIndexOf(e) {
        return this.array.lastIndexOf(e);
    }
    remove(e) {
        if (this.contains(e)) {
            this.array.splice(this.array.indexOf(e), 1);
            return true;
        }
        else {
            return false;
        }
    }
    removeAll(c) {
        let removed = false;
        for (let e of c.toArray()) {
            removed = removed || this.remove(e);
        }
        return removed;
    }
    removeAt(index) {
        return this.array.splice(index, 1)[0];
    }
    retainAll(c) {
        let remove = this.array.filter(e => !c.contains(e));
        let changed = false;
        for (let e of remove) {
            changed = changed || this.remove(e) != null;
        }
        return changed;
    }
    set(index, element) {
        return this.array.splice(index, 1, element)[0];
    }
    size() {
        return this.array.length;
    }
    subList(fromIndex, toIndex) {
        return new ArrayList(this.array.slice(fromIndex, toIndex));
    }
    toArray() {
        return this.array.slice();
    }
    toJSON() {
        return this.array;
    }
}
//# sourceMappingURL=array-list.js.map