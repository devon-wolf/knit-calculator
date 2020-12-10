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
	// console.log(firstHalf);
	const secondHalf = sectionArray.slice(Math.ceil(sectionArray.length / 2), sectionArray.length);
	// console.log(secondHalf);
	if ([...firstHalf, ...secondHalf].length === sectionArray.length) {
		return [firstHalf, secondHalf];
	}
	else {
		return [firstHalf, sectionArray[Math.floor(sectionArray.length / 2)], secondHalf];
	};
};

export function splitHistory(array) {
	let arrayMemory = [];
	let splitArray = splitInHalf(array);
	let firstHalf = splitArray[0]; // array
	let secondHalf = splitArray[splitArray.length - 1]; // array
	if ([...firstHalf, ...secondHalf].length === array.length) {
		arrayMemory.push(firstHalf, secondHalf); // 2 arrays pushed to array
	}
	else {
		arrayMemory.push(firstHalf, array[Math.floor(array.length / 2)], secondHalf); // array, single item, and array pushed to array
	};
	return arrayMemory; // an array filled with arrays and possible one non-array item
};

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

export function splitAndAddRemainder(array, remainder) {
	let newArray = ['I have no data'];
	
	let splitArray = splitInHalf(array);
	let firstHalf = splitArray[0];
	let secondHalf = splitArray[splitArray.length - 1];
	let i = remainder;
	let workingArray = [];

	console.log('STARTING DATA:\nfirst half:', firstHalf, 'second half:', secondHalf, 'stitches in i:', i);
	
	addOnetoFirstSection(firstHalf);
	i -= 1;
	addOnetoFirstSection(secondHalf);
	i -= 1;

	console.log('After first additions:\nfirst half:', firstHalf, 'second half:', secondHalf, 'stitches in i:', i);

	if (splitArray.length > 2) {
		workingArray.push(firstHalf, rememberMiddleStitch(splitArray), secondHalf);
	}
	else {
		workingArray.push(firstHalf, secondHalf);
	};

	console.log('Working array after first push:', workingArray);
	
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

	console.log('Mess array after while loop:', messArray);
	/* all works as expected with input of:
		39 stitches, 7 sections
			messArray returns [[6], 5, [6], 5, [6], 5, [6]]
		49 stitches, 9 sections
			messArray returns [[6, 5], [6, 5], 5, [6, 5], [6, 5]]
		
		Need to make sure this function does NOT get used when there is no remainder, because it automatically adds two stitches right now without ever checking to see if there are actually extra stitches - can add an if statement at the start as a failsafe, though this is only intended to be used within functions that themselves do check for the remainder
	*/

	/* if (array.length % 2 === 0) {
		workingArray.push(firstHalf, secondHalf);
	}
	else {
		workingArray.push(firstHalf, array[Math.floor(array.length / 2)], secondHalf);
	}; */
/* 
	while (i > 0) {
		splitAndAddRemainder(workingArray); // this is a problem bc it's an array with arrays inside, where the initial value was not
	}; */
	
	return newArray;
};



export function distributeStitches(stitchCount, desiredSections, array) {
	const remainder = stitchCount % desiredSections;
	let splitArray = splitInHalf(array);
	let newSections = [];
	let arrayMemory = [];
	
	if (remainder % 2 === 0) {
		let i = 0;
		do {
			i += 2;
			let firstHalf = splitArray[0];
			let secondHalf = splitArray[splitArray.length - 1];
			firstHalf[0] = firstHalf[0] + 1;
			secondHalf[0] = secondHalf[0] + 1;
		} while (i < remainder);
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
	
	// quick line to confirm the right number of stitches is present in the new array
	console.log(`Total stitches in newSections: ${newSections.reduce((a, b) => a + b)}`);
		
	return newSections;
};

