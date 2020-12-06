// console.log('I\'m attached!');
// works

/*
calcButton.addEventListener('click', () => {
	console.log('I can hear you.');
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	console.log(startCount.value, divisions.value, decrease.value);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	const stitches = Number(startCount.value);
	const sections = Number(divisions.value);
	const decreaseBy = Number(decrease.value);
	
	console.log(stitches + sections + decreaseBy);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	const stitches = Number(startCount.value);
	const sections = Number(divisions.value);
	const decreaseBy = Number(decrease.value);
	
	console.log(stitches + sections + decreaseBy);
	results.textContent = stitches + sections + decreaseBy;
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	console.log(toNumber(startCount) + toNumber(divisions) + toNumber(decrease));
	results.textContent = toNumber(startCount) + toNumber(divisions) + toNumber(decrease);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	let rawValues = [startCount, divisions, decrease];
	let numberBox = rawValues.map(i => toNumber(i));
	console.log(numberBox);
	results.textContent = numberBox.reduce((a, b) => a + b);
});
*/
// works

/*
let rawValues = [startCount, divisions, decrease];
	console.log(mapValueByID(rawValues));
*/
//works