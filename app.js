import {
	makeCalcObject
} from './utils/dom-utils.js';

import {
	makeSectionArray,
	distributeRemainder
} from './utils/math-utils.js';

const stitchesInput = document.getElementById('stitch-count');
const sectionsInput = document.getElementById('desired-sections');
// const decreaseInput = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const resultsDiv = document.getElementById('results');

calcButton.addEventListener('click', () => {	
	const calcObject = makeCalcObject(
		['stitches', 'sections'], 
		[stitchesInput, sectionsInput]);

	const { stitches, sections } = calcObject;
	const sectionArray = distributeRemainder(stitches, sections);
	
	resultsDiv.textContent = sectionArray;
});
