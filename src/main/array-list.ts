import { List} from "./list";
import { Collection} from "./collection";
import { ArrayIterator} from "./array-iterator";

export class ArrayList<E> implements List<E> {

    private array: E[];

    public constructor(array: E[] = []) {
        this.array = array;
    }

    public add(e: E): boolean {
        this.array.push(e);
        return true;
    }

    public addAll(c: Collection<E>): boolean {
        if (c.isEmpty()) {
            return false;
        } else {
            this.array.concat(c.toArray());
            return true;
        }
    }

    public addAllAt(index: number, c: Collection<E>): boolean {
        if (c.isEmpty) {
            return false;
        } else {
            let args: any[] = [index, 0];
            args.concat(c.toArray());
            Array.prototype.splice.apply(this.array, args);
            return true;
        }
    }

    public addAt(index: number, element: E): void {
        this.array.splice(index, 0, element);
    }

    public clear(): void {
        this.array.length = 0;
    }

    public contains(e: E): boolean {
        return this.array.indexOf(e) >= 0;
    }

    public containsAll(c: Collection<E>): boolean {
        for (let e of c.toArray()) {
            if (!this.contains(e)) {
                return false;
            }
        }
        return true;
    }

    public get(index: number): E {
        return this.array[index];
    }

    public indexOf(e: E): number {
        return this.array.indexOf(e);
    }

    public isEmpty(): boolean {
        return this.array.length == 0;
    }

    public iterator(): ArrayIterator<E> {
        return new ArrayIterator<E>(this.array);
    }

    public lastIndexOf(e: E): number {
        return this.array.lastIndexOf(e);
    }

    public remove(e: E): boolean {
        if (this.contains(e)) {
            this.array.splice(this.array.indexOf(e), 1);
            return true;
        } else {
            return false;
        }
    }

    public removeAll(c: Collection<E>): boolean {
        let removed = false;
        for (let e of c.toArray()) {
            removed = removed || this.remove(e);
        }
        return removed;
    }

    public removeAt(index: number): E {
        return this.array.splice(index, 1)[0];
    }

    public retainAll(c: Collection<E>): boolean {
        let remove = this.array.filter(e => !c.contains(e));
        let changed = false;
        for (let e of remove) {
            changed = changed || this.remove(e) != null;
        }
        return changed;
    }

    public set(index: number, element: E): E {
        return this.array.splice(index, 1, element)[0];
    }

    public size(): number {
        return this.array.length;
    }

    public subList(fromIndex: number, toIndex: number): ArrayList<E> {
        return new ArrayList<E>(this.array.slice(fromIndex, toIndex));
    }

    public toArray(): E[] {
        return this.array.slice();
    }

    public toJSON(): any {
        return this.array;
    }

}
