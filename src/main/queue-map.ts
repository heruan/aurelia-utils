export class QueueMap<K, V> {

    private map: Map<K, V>;

    public constructor(map?: QueueMap<K, V>) {
        this.map = map ? new Map<K, V>(map.map) : new Map<K, V>();
    }

    public get size() {
        return this.map.size;
    }

    public clear(): void {
        this.map.clear();
    }

    public delete(key: K): boolean {
        return this.map.delete(key);
    }

    public entries(): IterableIterator<[K, V]> {
        return this.map.entries();
    }

    public forEach(callbackFn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any) {
        return this.map.forEach(callbackFn, thisArg);
    }

    public get(key: K): V {
        return this.map.get(key);
    }

    public has(key: K): boolean {
        return this.map.has(key);
    }

    public keys(): IterableIterator<K> {
        return this.map.keys();
    }

    public set(key: K, value: V): QueueMap<K, V> {
        this.map.delete(key);
        this.map.set(key, value);
        return this;
    }

    public values(): IterableIterator<V> {
        return this.map.values();
    }

    public toJSON(): any {
        return this.map;
    }

}
