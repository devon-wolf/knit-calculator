const startCount = document.getElementById('stitch-count');
const divisions = document.getElementById('desired-sections');
const decrease = document.getElementById('decrease-factor');
const calcButton = document.getElementById('calc-button');
const results = document.getElementById('results');

import { toNumber } from "./utils.js";

calcButton.addEventListener('click', () => {
	
	console.log(toNumber(startCount));
	
	let rawValues = [startCount, divisions, decrease];
	let numberBox = rawValues.map(i => toNumber(i));

	// placeholder math to prove the math is working
	results.textContent = numberBox.reduce((a, b) => a + b);
});