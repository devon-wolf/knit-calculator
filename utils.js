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
	// 'sections' is what the function will ultimately return
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
/* export function distributeExtras(stitchCount, desiredSections, sectionArray) {
	const remainder = stitchCount % desiredSections;

}; */