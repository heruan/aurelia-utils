import { Cancelable } from "./cancelable";
export interface CancelablePromise<T> extends Cancelable, Promise<T> {
}
