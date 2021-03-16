const stitchesInput = document.getElementById('stitch-count');
const sectionsInput = document.getElementById('desired-sections');
const decreaseInput = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const resultsDiv = document.getElementById('results');

import {
	mapValueByID,
	planSections,
	splitAndAddRemainder,
} from "./utils.js";

calcButton.addEventListener('click', () => {	
	// const rawValues = [stitchesInput, sectionsInput, decreaseInput];
	// const stitchSpecs = mapValueByID(rawValues);

	// // use planSections to make sectionArray
	// let sectionArray = planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']);

	// while (sectionArray.reduce((a, b) => a + b) !== stitchSpecs['stitch-count']) {
	// 	sectionArray = splitAndAddRemainder(sectionArray, stitchSpecs['stitch-count'] % stitchSpecs['desired-sections']);
	// };
	// resultsDiv.textContent = sectionArray;
});
