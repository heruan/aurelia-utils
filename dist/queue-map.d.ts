export declare class QueueMap<K, V> {
    private map;
    constructor();
    readonly size: number;
    clear(): void;
    delete(key: K): boolean;
    entries(): IterableIterator<[K, V]>;
    forEach(callbackFn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V;
    has(key: K): boolean;
    keys(): IterableIterator<K>;
    set(key: K, value: V): QueueMap<K, V>;
    values(): IterableIterator<V>;
    toJSON(): any;
}
