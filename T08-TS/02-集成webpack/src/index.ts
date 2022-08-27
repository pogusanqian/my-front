import { hi } from './m1';

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(100, 200));
(() => console.log(hi))()
