import { Iterator} from "./iterator";

export class ArrayIterator<E> implements Iterator<E> {

    private array: E[];

    public constructor(array: E[]) {
        this.array = array;
    }

    public hasNext(): boolean {
        return this.array.length != 0;
    }

    public next(): E {
        return this.array.shift();
    }

}
