
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