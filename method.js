import * as say from './const.js';

export  function sumcos(a){
	return a + say.cos60;
}
export function subtract(a) {
    return a - say.cos60;
}

function multiply(a) {
    return a * say.cos60;
}

function divide(a) {
    return a / say.cos60;
}

export default function square(a) {
    return a * a;
}

export function goldenRatio(a) {
    return a * say.pi;
}

export {multiply, divide}; 

import { pi } from './const.js';
export { pi };