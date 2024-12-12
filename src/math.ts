/**
 * Gets the average of an array of numbers
 * 
 * @param input The array of numbers the operation will be done on.
 * 
 * @example
 * ```typescript
 * import { getAverage } from "hassus-web-gizmos";
 * 
 * const someAverage = getAverage([1, 3, 6, 2, 5, 4]);
 * console.log(someAverage) // 3.5
 * ```
 */
export function getAverage(input: number[]): number {
    let sum = 0;

    input.forEach(e => {
        sum = sum + e
    });

    return sum / input.length
}