const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

import {
	toNumber,
	mapValueByID,
	planSections,
	splitInHalf,
	distributeStitches,
	splitAndAddRemainder
} from "./utils.js";



calcButton.addEventListener('click', () => {	
	const rawValues = [startCount, divisions, decrease];
	const stitchSpecs = mapValueByID(rawValues);
	const numberBox = rawValues.map(i => toNumber(i));

	// placeholders to test functions
	console.log(`stitchSpecs`, stitchSpecs);

	console.log(`planSections`, planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']));

	const sectionArray = planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']);

	console.log(`splitInHalf`, splitInHalf(sectionArray));

	/* console.log(`splitRepeatedly`, splitRepeatedly(sectionArray)); */

	console.log('splitAndAddRemainder:', splitAndAddRemainder(sectionArray, stitchSpecs['stitch-count'] % stitchSpecs['desired-sections']));

	/* console.log(distributeStitches(stitchSpecs['stitch-count'], stitchSpecs['desired-sections'], sectionArray)); */


	// placeholder math to prove the math is working
	results.textContent = numberBox.reduce((a, b) => a + b);
});