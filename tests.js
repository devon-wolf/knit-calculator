// 49 stitches, 9 divisions (rem 4) should return [6, 5, 6, 5, 5, 6, 5, 6, 5]
// adding 1 to [0], then the [0] of the second half, then [2], then [2] of the second half

// 51 stitches, 9 divisions (rem 6) should return [6, 5, 6, 6, 6, 6, 5, 6, 5]
// the way I'm doing this by hand is adding 1 to [0], then the [0] of the second half, then [2], then [2] of the second half... after that I put the last two in the middle based on very little logic, probably the same reason it caused the recursion loop

// 106 stitches, 6 divisions (rem 4) should return [18, 17, 18, 18, 17, 18]
// adding 1 to [0], then the [0] of the second half, then [2], then [2] of the second half

import {
	toNumber,
	mapValueByID,
	planSections,
	splitAndAddRemainder,
	distributeOverHalf
} from "./utils.js";

// basic object to hold test parameters
export function populateTests(testValues) {
	// testValues should be an array (possibly containing primitives, arrays, objects, etc), each item of which is intended to be passed to testFunction as a separate test

	let testParams = {};
	for (let i = 0; i < testValues.length; i++) {
		testParams[`test${i + 1}`] = testValues[i];
	};
	// should look like {test1: 76, test2: [12, 9], test3: 'purple'} or whatever the values are
	return testParams;
};

// same as above, resultValues needs to be an array (should build in a check for this)
export function populateResults(resultValues) {
	let expectedResults = {};
	for (let i = 0; i < resultValues.length; i++) {
		expectedResults[`test${i + 1}`] = resultValues[i];
	};
	return expectedResults;
};

// basic test function
// testParams should be an object that comes from the populateTests function, expectedResults comes from populateResults
export function testFunction(func, testParams, expectedResults) {
	let functionTests = {
		passed: [],
		failed: [],
	};
	for (let test in testParams) {
		// need to account for functions that take multiple arguments, probably a try/catch statement with ...
		// if multiple args are in an array, need to account for iterating through the array below
		let testResult;
		try {
			testResult = func(...testParams[test]);
		}
		catch {
			testResult = func(testParams[test]);
		};
		
		if (testResult === expectedResults[test]) {
			functionTests.passed.push(test);
		}
		else {
			functionTests.failed.push(test);
		};
	};
	return functionTests;
};

// bare bones test function, because the stuff above is a mess
export function simpleTest(actualResult, expectedResult) {
	console.log('Actual:', actualResult, 'Expected:', expectedResult);
	if (actualResult === expectedResult) {
		return true;
	}
	else {
		return false;
	};
};

// test for toNumber(input)
// NOTE - toNumber is specific to pulling from an HTML field - it uses the format of variableName.value to get the element's value and convert that to a number

export function toNumberTest(input) {
	
};



