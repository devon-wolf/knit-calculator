export function makeSectionArray(stitches, sections) {
	const stitchesPerSection = Math.floor(stitches / sections);
	const remainder = stitches % sections;

	let sectionArray = [];
	for (let i = 0; i < sections; i++) {
		sectionArray.push(stitchesPerSection);
	}
	if (remainder) sectionArray.push(remainder);

	return sectionArray;
}

export function distributeRemainder(stitches, sections) {
	const sectionArray = makeSectionArray(stitches, sections);
	if (sectionArray.length === sections) return sectionArray;

	const remainder = sectionArray.pop();

	if (sectionArray.length % 2 === 0) {
		
		if (remainder % 2 === 0) {
			// distribute remainder evenly throughout sections
			

		}
		
		else {
			// distribute evenly until only one stitch remains, place that stitch somewhat arbitrarily
		}
	}

	else {
		// account for the 'middle' section item in calculations
	}

	return sectionArray;
}

function addOnetoFirstSection(array) {
	array[0] = array[0] + 1;
	return array;
};

function splitInHalf(array) {
	const firstHalf = array.slice(0, Math.floor(array.length / 2));
	const secondHalf = array.slice(Math.ceil(array.length / 2), array.length);

	if ([...firstHalf, ...secondHalf].length === array.length) {
		return [firstHalf, secondHalf];
	}
	else {
		return [firstHalf, array[Math.floor(array.length / 2)], secondHalf];
	}; 
}

function spreadOutArrays(array) {
	let newArray = [];
	for (let item of array) {
		try {
			newArray.push(...item);
		}
		catch {
			newArray.push(item);
		};
	};
	return newArray;
};

function distributeEvenly(sectionArray, remainder) {
	const subSections = sectionArray / remainder;
	
}

function distributeUnevenly(sectionArray, remainder) {

}