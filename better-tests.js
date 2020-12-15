import {
	toNumber,
	mapValueByID,
	planSections,
	splitInHalf,
	splitAndAddRemainder,
	distributeOverHalf
} from "./utils.js";

const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

// FOR REFERENCE
/*
<input id="stitch-count" type="number"/>
<input id="desired-sections" type="number"/>
<input id="decrease-factor" type="number"/>
<button id="calc-button">Calculate</button>
<div class="result-box" id="results"></div>
*/


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
	console.log(actualResult, expectedResult);
	console.log(Object.keys(actualResult), Object.keys(expectedResult));

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
	//let testParamString = `${testCount}, ${testSections}`;
	// currently the object above won't identify what the test parameters were
	let actualResult = planSections(testCount, testSections);
	console.log(actualResult, expectedResult);
	
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
			console.log(`pass ${i + 1}: actual - ${actualResult[i]}, expected: ${expectedResult[i]}`);
			planSectionsResults['valueMatch'] = 'FAILED';
			break;
		};
		console.log(`pass ${i + 1}: actual - ${actualResult[i]}, expected: ${expectedResult[i]}`);
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
	console.log(actualResult, expectedResult);
	// THINGS THAT NEED TO BE TRUE
	// actualResult.length === 2 || actualResult.length === 3
	// Array.isArray on the first and last item must be true

	// for now I can just test against the expectation though
	if (actualResult === expectedResult) {
		splitInHalfResults['globalMatch'] = 'PASSED';
	}
	else {
		splitInHalfResults['globalMatch'] = 'FAILED';
	};
	
	let i = 0;
	while (i <= actualResult.length - 1) {
		if (actualResult[i] !== expectedResult[i]) {
			splitInHalfResults['valueMatch'] = 'FAILED';
			break;
		};
		splitInHalfResults['valueMatch'] = 'PASSED';
		i++;
	};
	return splitInHalfResults;
};
// this needs to be reworked to account for the nested arrays, it's logging a failure when actual and expected are both clearly [[17, 17, 17], [17, 17, 17]] - may need to look at the difference between == and === to make this process smoother