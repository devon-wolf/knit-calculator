const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

import {
	toNumber,
	mapValueByID,
	planSections
} from "./utils.js";



calcButton.addEventListener('click', () => {	
	const rawValues = [startCount, divisions, decrease];
	const stitchSpecs = mapValueByID(rawValues);
	const numberBox = rawValues.map(i => toNumber(i));

	// placeholder to show the object is getting the right info
	console.log(stitchSpecs);

	// test: 100 stitches, 4 desired sections should return this array: [25, 25, 25, 25] - PASSED
	console.log(planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']));

	// placeholder math to prove the math is working
	results.textContent = numberBox.reduce((a, b) => a + b);
});