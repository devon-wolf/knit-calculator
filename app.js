const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

import {
	mapValueByID,
	planSections,
	splitAndAddRemainder,
} from "./utils.js";

calcButton.addEventListener('click', () => {	
	const rawValues = [startCount, divisions, decrease];
	const stitchSpecs = mapValueByID(rawValues);

	// use planSections to make sectionArray
	let sectionArray = planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']);

	while (sectionArray.reduce((a, b) => a + b) !== stitchSpecs['stitch-count']) {
		sectionArray = splitAndAddRemainder(sectionArray, stitchSpecs['stitch-count'] % stitchSpecs['desired-sections']);
	};
	results.textContent = sectionArray;
});
