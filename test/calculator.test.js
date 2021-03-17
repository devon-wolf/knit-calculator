// import functions to test
import {
	makeSectionArray,
	distributeRemainder
} from '../utils/math-utils.js'

const test = QUnit.test;

// testing makeSectionArray, exercise in granular test-as-you-go strategy
test('It should return an array', (expect) => {
    const expected = true;
    const actual = Array.isArray(makeSectionArray(187, 6));
    
	expect.equal(actual, expected);
});

test('It should return an array of numbers', (expect) => {
	const testArray = makeSectionArray(187, 6);
    const expected = true;
    const actual = testArray.every(n => typeof n === 'number') && testArray.length > 0;
    
	expect.equal(actual, expected);
});

test('Its length should either be equal to or one greather than the "sections" argument', (expect) => {
	const testArray = makeSectionArray(187, 6);
    const expected = true;
    const actual = testArray.length === 6 || testArray.length === 7;
    
	expect.equal(actual, expected);
});

test('All numbers should be the same, except the last number if it is of the longer type; in the longer type, the last number should always be less than the "sections" argument', (expect) => {
	const testArray = makeSectionArray(187, 6);
	const subArray = testArray.slice(0, 6);

    const expected = true;
    const actual = subArray.every(n => n === testArray[0]);
	expect.equal(actual, expected);

	const expected2 = true;
	const actual2 = testArray[6] ? testArray[6] <= 6 : true;
	expect.equal(actual2, expected2);
});

test('The first set of numbers should be the quotient of the given arguments; the final number, if present, should be their remainder', (expect) => {
	const testArray = makeSectionArray(204, 10);
    
	const expected = true;
    const actual = testArray[0] === Math.floor(204 / 10);
	expect.equal(actual, expected);

	const expected2 = true;
    const actual2 = testArray[10] ? testArray[10] === 204 % 10 : true;
	expect.equal(actual2, expected2);
});

// testing distributeRemainder
test('The total of all numbers in the array should equal the "stitches" argument', (expect) => {
	const testArray = distributeRemainder(204, 10);
    
	const expected = 204;
    const actual = testArray.reduce((a, b) => a + b);
	expect.equal(actual, expected);
});