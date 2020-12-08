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
export function distributeExtras(stitchCount, desiredSections, sectionArray) {
	const remainder = stitchCount % desiredSections;
	const firstHalf = sectionArray.slice(Math.floor(sectionArray.length / 2));
	const secondHalf = sectionArray.slice(Math.floor(sectionArray.length / 2), sectionArray.length);
	/* test: 106 stitches, 8 desired sections should log:
		2
		[13, 13, 13, 13, 13, 13, 13, 13]
		[13, 13, 13, 13]
		[13, 13, 13, 13]
		[13, 13, 13, 13, 13, 13, 13, 13]
		PASSED
	*/

	let newSections = [];
	if (remainder % 2 === 0) {
		for (let i = 0; i < remainder; i += 2) {
			firstHalf[0] = firstHalf[0] + 1;
			secondHalf[0] = secondHalf[0] + 1;

			// IN PROGRESS
			/* let firstHalfSplit = firstHalf.slice(Math.floor(firstHalf.length / 2, firstHalf.length));
			let secondHalfSplit = secondHalf.slice(Math.floor(secondHalf.length / 2, secondHalf.length)); */
		};
		newSections = [...firstHalf, ...secondHalf];
		/*
		test: 106 stitches, 8 desired sections should return:
		[14, 13, 13, 13, 14, 13, 13, 13]
		PASSED
		*/
	}
	else {
		console.log('I do not yet know how to handle odd numbers of extra stitches, so they have been tacked on to the end as a new section.');
		newSections = [...sectionArray, remainder];
		/*
		test: 107 stitches, 8 desired sections should return:
		[13, 13, 13, 13, 13, 13, 13, 13, 3]
		PASSED
		*/
	};
	return newSections;
};