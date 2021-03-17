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