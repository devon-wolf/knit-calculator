export function makeCalcObject(stringArray, elementArray) {
	if (stringArray.length !== elementArray.length) {
		console.log('cannot make object from arrays of different lengths');
		return;
	}

	let newObject = {};
	for (let i = 0; i < stringArray.length; i++) {
		newObject[stringArray[i]] = Number(elementArray[i].value);
	}

	return newObject;
};