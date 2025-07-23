/**
 * Implementation of a stack data-structure.
 */
export class Stack<T> {

    private array: T[] = [];
    private top: number = -1;

    /**
     * Builds a new, empty Stack.
     */
    constructor() {

    }

    /**
     * Adds a new element at the top of the stack.
     *
     * @param element is the element you want to add
     */
    stack(element: T): void {
        this.top++;
        this.array[this.top] = element;
    }

    /**
     * Removes and returns the top-most element of the stack or undefined if the stack is empty.
     *
     * @returns the element: T or undefined
     */
    unstack(): T | undefined {

        if (this.isEmpty()) {
            return undefined;
        }

        const e: T = this.array[this.top];
        this.top--;
        return e;

    }

    /** Returns the top-most element (or undefined if it's empty), without removing it */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.array[this.top];
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    /** Returns the number of elements inside the stack */
    size(): number {
        return this.top + 1;
    }

}
