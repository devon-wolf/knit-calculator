const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

/* import {
	populateTests,
	populateResults,
	testFunction,
	simpleTest,
	// toNumberTest
} from "./tests.js"; */

import {
	mapValueByIDTest,
	toNumberTest,
	planSectionsTest,
	splitInHalfTest
} from "./better-tests.js"

import {
	mapValueByID,
	planSections,
	splitAndAddRemainder,
	distributeOverHalf
} from "./utils.js";

calcButton.addEventListener('click', () => {	
	const rawValues = [startCount, divisions, decrease];
	const stitchSpecs = mapValueByID(rawValues);

	// base test input is 106 stitches, 6 desired sections, 1 decrease factor

	// test the toNumber function
	console.log('toNumberResults:', toNumberTest(startCount, 106));

	// test the mapValueByID function
	console.log('mapValueByIDResults:', mapValueByIDTest((rawValues), {'stitch-count': 106, 'desired-sections': 6, 'decrease-factor': 1}));

	// test the planSections function
	console.log('planSectionsResults:', planSectionsTest(stitchSpecs['stitch-count'], stitchSpecs['desired-sections'], [17, 17, 17, 17, 17, 17]));

	// use planSections to make sectionArray
	let sectionArray = planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']);

	// test the splitInHalf function
	console.log('splitInHalfResults:', splitInHalfTest(sectionArray, [[17, 17, 17], [17, 1, 1]]));
});
