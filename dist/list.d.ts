import { Collection } from "./collection";
export interface List<E> extends Collection<E> {
    addAt(index: number, element: E): void;
    addAllAt(index: number, c: Collection<E>): boolean;
    get(index: number): E;
    indexOf(e: E): number;
    lastIndexOf(e: E): number;
    removeAt(index: number): E;
    set(index: number, element: E): E;
    subList(fromIndex: number, toIndex: number): List<E>;
    toJSON(): any;
}
