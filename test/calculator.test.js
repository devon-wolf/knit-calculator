// import functions to test
import {
	divide
} from '../utils/math-utils.js'

const test = QUnit.test;

// testing basic division as a sample
test('It should return a value when given other values', (expect) => {
    const expected = false;
    const actual = !divide(108, 6);
    
	expect.equal(actual, expected);
});

test('Its return value should be a number', (expect) => {
    const expected = 'number';
    const actual = typeof divide(108, 6);
    
	expect.equal(actual, expected);
});

test('It should return the quotient of the given values', (expect) => {
    const expected = 18;
    const actual = divide(108, 6);
    
	expect.equal(actual, expected);
});
