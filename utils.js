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
		// this is a thing I can use to test - if the reduced array equals the total stitch count, no further action needs to be taken
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

export function splitInHalf(array) {
	const firstHalf = array.slice(0, Math.floor(array.length / 2));
	const secondHalf = array.slice(Math.ceil(array.length / 2), array.length);
	
	if ([...firstHalf, ...secondHalf].length === array.length) {
		return [firstHalf, secondHalf];
	}
	else {
		return [firstHalf, array[Math.floor(array.length / 2)], secondHalf];
	};
};
// worth noting that this always returns an array of either 2 or 3 items (this phenomenon is used in rememberMiddleStitch and splitAndAddRemainder)

export function addOnetoFirstSection(array) {
	array[0] = array[0] + 1;
	return array;
};

export function rememberMiddleStitch(array) {
	if (array.length % 2 !== 0) {
		splitInHalf(array);
		return array[1];
	};
};

export function spreadOutArrays(array) {
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

export function distributeToArray(array, value) {
	let i = value;
	while (i > 0) {
		addOnetoFirstSection(array);
		i -= 1;
	};
	return array;
};

export function identifyEnds(array) {
	const sections = {
		start: array[0],
		end: array[array.length - 1]
	};
	return sections;
};

export function distrubuteOverHalf(array, remainder) {
	let finishedHalf = [];
	let i = remainder;
	let nextArray = [];
	
	while (i > remainder / 2) {
		distributeToArray(array, 1);
		let sections;
		// I need to fix this to get dropped middle items to push into the finishedHalf, can probably be done by adding a middle item key into the identify ends function and accounting for that in this one
		// one consideration to keep in mind with what I did here - the iteration will be wonky with odd numbered sections with a remainder close to the number of total sections because of the loss of the middle item (example: 7 sections with a remainder of 6)
		// I've been considering adding the middle item to identifyEnds, that might be a way to help this - there are some arrays where the VERY middle item needs to get a stitch (the fourth item in the above example)
		// right now it will return the correct values for half the array, but the total number of stitches will be a stitch short (in the middle) - this can probably be handled in the broader function that will run this one over both the start and end sections, then check to see if the reduced array contains the right number of stitches - if not it can look for the middle item
		// otherwise this is going well though
		if (array.length > 1) {
			nextArray = splitInHalf(array);
			sections = identifyEnds(nextArray);
			finishedHalf.push(...sections.start);
		}
		else if (array.length === 1) {
			finishedHalf.push(...array);
		}
		else {
			console.log('Something went wrong; length of array is less than 1.')
		};
		i -= 1;
		distributeOverHalf(sections.end, remainder);

	};
	return finishedHalf;
};


// probably going to nuke this one/restart and make it the base for the refactored splitAndAddRemainder fnc
export function addRemainderOneSide(array, remainder) {
	let sections = identifyEnds(array);
	let i = remainder;
	let workingArray = [];
// IN PROGRESS, just mimicing the below function right now, figuring out how to simplify...
	distributeToArray(sections.start, 1);
	i -= 1;
	console.log(sections.start);
	distributeToArray(sections.end, 1);
	i -= 1;
	console.log(sections.end);

	let nextArray = splitInHalf(array);

};

export function splitAndAddRemainder(array, remainder) {
	let splitArray = splitInHalf(array);
	let firstHalf = splitArray[0];
	let secondHalf = splitArray[splitArray.length - 1];
	let i = remainder;
	// need to make sure remainder is coming from a logical place
	
	addOnetoFirstSection(firstHalf);
	i -= 1;
	addOnetoFirstSection(secondHalf);
	i -= 1;

	let messArray = [];
	
	while (i > 0) {
		let splitFirst = splitInHalf(firstHalf);
		let splitSecond = splitInHalf(secondHalf);
		
		let startSection1 = splitFirst[0];
		let startSection2 = splitSecond[0];
		
		let endSection1 = splitFirst[splitFirst.length - 1];
		let endSection2 = splitSecond[splitSecond.length - 1];
		
		addOnetoFirstSection(endSection1);
		addOnetoFirstSection(endSection2);

		if (splitFirst.length > 2) {
			// insert the middle stitches into the arrays
			if (splitArray.length > 2) {
				messArray.push(startSection1, rememberMiddleStitch(splitFirst), endSection1, rememberMiddleStitch(splitArray), startSection2, rememberMiddleStitch(splitSecond), endSection2);
			}
			else {
				messArray.push(startSection1, rememberMiddleStitch(splitFirst), endSection1, startSection2, rememberMiddleStitch(splitSecond), endSection2);
			};
		}
		else {
			// just need to insert the two halves
			if (splitArray.length > 2) {
				messArray.push(startSection1, endSection1, rememberMiddleStitch(splitArray), startSection2, endSection2);
			}
			else {
				messArray.push(startSection1, endSection1, startSection2, endSection2);
			};
		};

		i -= 2;
	};

	/* all works as expected with input of:
		39 stitches, 7 sections
			messArray returns [[6], 5, [6], 5, [6], 5, [6]]
		49 stitches, 9 sections
			messArray returns [[6, 5], [6, 5], 5, [6, 5], [6, 5]]
		
		Need to make sure this function does NOT get used when there is no remainder, because it automatically adds two stitches right now without ever checking to see if there are actually extra stitches - can add an if statement at the start as a failsafe, though this is only intended to be used within functions that themselves do check for the remainder
	*/
	
	// quick line to confirm the right number of stitches is present in the new array
	
	let newArray = spreadOutArrays(messArray);
	console.log(`Total stitches in newArray: ${newArray.reduce((a, b) => a + b)}`);

	return spreadOutArrays(messArray);
};
// this works!! the returned array has the right number of sections and the remainder spread out evenly among them