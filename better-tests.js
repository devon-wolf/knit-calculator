import {
	toNumber,
	mapValueByID,
	planSections,
	splitInHalf,
	splitAndAddRemainder,
	distributeOverHalf
} from "./utils.js";

// VARIABLES FROM HTML DOCUMENT
const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

// TESTS FOR UTIL FUNCTIONS
const toNumberResults = {};
export function toNumberTest(inputElement, expectedResult) {
	let actualResult = toNumber(inputElement);
	if (actualResult === expectedResult) {
		toNumberResults[inputElement.value] = 'PASSED';
	}
	else {
		toNumberResults[inputElement.value] = 'FAILED';
	};
	return toNumberResults;
};
// seems to work! pushes each new test to the outside object with the inputElement's value as the key and the 'passed' status as the value

const mapValueByIDResults = {};
export function mapValueByIDTest(array, expectedResult) {
	let actualResult = mapValueByID(array);
	let actualKeys = Object.keys(actualResult);
	let expectedKeys = Object.keys(expectedResult);
	let i = 0;
	while (i <= actualKeys.length - 1) {
		if (actualKeys[i] !== expectedKeys[i]) {
			mapValueByIDResults['keyMatch'] = 'FAILED';
			break;
		};
		mapValueByIDResults['keyMatch'] = 'PASSED';
		i++;
	};
	i = 0;
	while (i <= actualKeys.length - 1) {
		if (actualResult[actualKeys[i]] !== expectedResult[expectedKeys[i]]) {
			mapValueByIDResults['valueMatch'] = 'FAILED';
			break;
		};
		mapValueByIDResults['valueMatch'] = 'PASSED';
		i++;
	};
	return mapValueByIDResults;
};
// seems to work correctly but the outside object doesn't hold a history bc it's using static names for the keys instead of one that uses the test values as part of the name

const planSectionsResults = {};
export function planSectionsTest(testCount, testSections, expectedResult) {
	let actualResult = planSections(testCount, testSections);
	// are the lengths equal?
	if (actualResult.length === expectedResult.length) {
		planSectionsResults['lengthMatch'] = 'PASSED';
	}
	else {
		planSectionsResults['lengthMatch'] = 'FAILED';
	};
	// are the values in the arrays equal?
	let i = 0;
	while (i <= actualResult.length - 1) {
		if (actualResult[i] !== expectedResult[i]) {
			planSectionsResults['valueMatch'] = 'FAILED';
			break;
		};
		planSectionsResults['valueMatch'] = 'PASSED';
		i++;
	};
	return planSectionsResults;
};
// seems to work correctly but the outside object doesn't hold a history bc it's using static names for the keys instead of one that uses the test values as part of the name

const splitInHalfResults = {};
export function splitInHalfTest(array, expectedResult) {
	let actualResult = splitInHalf(array);
	// returns an array
	// THINGS THAT NEED TO BE TRUE
	// actualResult.length === 2 || actualResult.length === 3
	// Array.isArray on the first and last item must be true
	// for now just testing against a static expected result
	let i = 0;
	while (i <= actualResult.length - 1) {
		if (actualResult[i] !== expectedResult[i]) {
			if (Array.isArray(actualResult) && Array.isArray(expectedResult)) {
				let j = 0;
				while (j <= actualResult[i].length - 1) {
					if (actualResult[i][j] !== expectedResult[i][j]) {
						splitInHalfResults['valueMatch'] = 'FAILED';
						break;
					};
					splitInHalfResults['valueMatch'] = 'PASSED';
					j++;
				};
			}
			else {
				splitInHalfResults['valueMatch'] = 'FAILED';
				break;
			};
		};
		if (splitInHalfResults['valueMatch'] !== 'FAILED') {
			splitInHalfResults['valueMatch'] = 'PASSED';
		};
		i++;
	};
	return splitInHalfResults;
};
// seems to work correctly, seems to handle nested arrays correctly

