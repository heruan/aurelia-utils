import { Iterator } from "./iterator";
export declare class ArrayIterator<E> implements Iterator<E> {
    private array;
    constructor(array: E[]);
    hasNext(): boolean;
    next(): E;
}
