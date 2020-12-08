export function toNumber(input) {
	return Number(input.value);
};

export function mapValueByID(array) {
	let valueByID = {};
	for (let item of array) {
		valueByID[item.id] = toNumber(item);
	};
	return valueByID;
};

export function planSections(stitchCount, desiredSections) {
	let sections = [];
	
	if (stitchCount % desiredSections === 0) {
		for (let i = 0; i <= desiredSections - 1; i++) {
			sections.push(stitchCount / desiredSections);
		};
		return sections;
		// test: 100 stitches, 4 desired sections should return this array: [25, 25, 25, 25] - PASSED
	}
	else {
		const remainder = stitchCount % desiredSections;
		const baseStitches = stitchCount - remainder;
		const sectionStitchCount = baseStitches / desiredSections;
		for (let i = 0; i <= desiredSections - 1; i++) {
			sections.push(sectionStitchCount);
		};
		return sections;
		// test: 106 stitches, 8 desired sections should return this array: [13, 13, 13, 13, 13, 13, 13, 13] - PASSED
	};
};

// IN PROGRESS
export function splitInHalf(sectionArray) {
	const firstHalf = sectionArray.slice(0, Math.floor(sectionArray.length / 2));
	console.log(firstHalf);
	const secondHalf = sectionArray.slice(Math.ceil(sectionArray.length / 2), sectionArray.length);
	console.log(secondHalf);
	if ([...firstHalf, ...secondHalf].length === sectionArray.length) {
		return [firstHalf, secondHalf];
	}
	else {
		return [firstHalf, sectionArray[Math.floor(sectionArray.length / 2)], secondHalf];
	};
};

export function distributeStitches(stitchCount, desiredSections, array) {
	let remainder = stitchCount % desiredSections;
	let newSections = [];

	let firstHalf = array[0];
	let secondHalf = array[array.length - 1];
	
	// IN PROGRESS - needs to split repeatedly and add 1 stitch to the first element of each new split until the remainder is used up
	if (remainder % 2 === 0) {
		for (let i = 0; i < remainder; i += 2) {
			firstHalf[0] = firstHalf[0] + 1;
			secondHalf[0] = secondHalf[0] + 1;
			};
		if (array.length % 2 === 0) {
			newSections = [...firstHalf, ...secondHalf];
		}
		else {
			newSections = [...firstHalf, array[Math.floor(array.length / 2)], ...secondHalf];
		};
		// all working as expected for the moment, but the distribution needs to iterate instead of all going on index 0
	}
	else {
		console.log('I do not yet know how to handle odd numbers of extra stitches, so they have been tacked on to the end as a new section.');
		newSections = [...array, remainder];
		/*
		test: 107 stitches, 8 desired sections should return:
		[13, 13, 13, 13, 13, 13, 13, 13, 3]
		PASSED
		*/
	};	
		// IN PROGRESS
		/*  let firstHalfSplit = firstHalf.slice(Math.floor(firstHalf.length / 2, firstHalf.length));
			let secondHalfSplit = secondHalf.slice(Math.floor(secondHalf.length / 2, secondHalf.length));
		
		 */
		/*
		test: 106 stitches, 8 desired sections should return:
		[14, 13, 13, 13, 14, 13, 13, 13]
		PASSED
		*/
	
	return newSections;
};

