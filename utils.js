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
	// CODE BELOW IS STILL SCRAP
	else if (!desiredSections % 2 === 0) {
		console.log('This is an odd number of desiredSections, please start over with an even number.');
	}
	else if (stitchCount % 2 === 0) {
		// divide up sections reasonably and distribute stray stitches
		let baseSection = stitchCount - (stitchCount % desiredSections);
		for (let i = 0; i < desiredSections - 2; i++) {
			sections.push(baseSection / desiredSections);
		};
		sections.push(stitchCount % desiredSections);
		// example: [6, 6, 6, 6, 6, 4] (stitchCount 34, desiredSections 6)

		// [6, 5, 6, 6, 5, 6] < that might be an ideal balance
		// [6, 6, 6, 6, 6, 4] < plus two to final index, minus one from second and next to last

		/*for (let factor = desiredSections - 2; factor > 2; factor -= 2) {
			if (stitchCount % factor === 0) {
				let baseSectionCount = stitchCount / factor;

			}
		}*/
	}
	/*else {
		// distribute stray stitch and then go back up to the else if probably
	}*/
};	