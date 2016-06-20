import { List } from "./list";
import { Collection } from "./collection";
import { ArrayIterator } from "./array-iterator";
export declare class ArrayList<E> implements List<E> {
    private array;
    constructor(array?: E[]);
    add(e: E): boolean;
    addAll(c: Collection<E>): boolean;
    addAllAt(index: number, c: Collection<E>): boolean;
    addAt(index: number, element: E): void;
    clear(): void;
    contains(e: E): boolean;
    containsAll(c: Collection<E>): boolean;
    get(index: number): E;
    indexOf(e: E): number;
    isEmpty(): boolean;
    iterator(): ArrayIterator<E>;
    lastIndexOf(e: E): number;
    remove(e: E): boolean;
    removeAll(c: Collection<E>): boolean;
    removeAt(index: number): E;
    retainAll(c: Collection<E>): boolean;
    set(index: number, element: E): E;
    size(): number;
    subList(fromIndex: number, toIndex: number): ArrayList<E>;
    toArray(): E[];
    toJSON(): any;
}
