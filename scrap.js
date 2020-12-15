// Code Scrapyard
// CODE BELOW IS STILL SCRAP
	/* else if (!desiredSections % 2 === 0) {
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

		for (let factor = desiredSections - 2; factor > 2; factor -= 2) {
			if (stitchCount % factor === 0) {
				let baseSectionCount = stitchCount / factor;

			}
		}
	} 
	else {
		// distribute stray stitch and then go back up to the else if probably
	}*/

	// old background image
	/* url("https://images.pexels.com/photos/1487701/pexels-photo-1487701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"); */

	/////////////////////

		// IN PROGRESS - needs to split repeatedly and add 1 stitch to the first element of each new split until the remainder is used up
		/* if (remainder % 2 === 0) {
			let i= 0;
			do {
				i += 2;
				let firstHalf = splitArray[0];
				let secondHalf = splitArray[splitArray.length - 1];
				firstHalf[0] = firstHalf[0] + 1;
				secondHalf[0] = secondHalf[0] + 1;
				if (i < remainder) {
					arrayMemory.push(firstHalf, secondHalf);
					console.log(`arrayMemory after ${i} stitches distributed: ${arrayMemory}`);
					firstHalf = splitInHalf(firstHalf);
					secondHalf = splitInHalf(secondHalf);
				}
			} while (i < remainder);
	
			for (let i = 0; i < remainder; i += 2) {
			 	console.log(`workingArray: ${workingArray}`);
				splitInHalf(workingArray)[0][0] = splitInHalf(workingArray)[0][0] + 1;
				splitInHalf(workingArray)[workingArray.length -1][0] = splitInHalf(workingArray)[workingArray.length -1][0] + 1;
				console.log(`workingArray after loop ${i}: ${workingArray}`);
				
				 firstHalf[0] = firstHalf[0] + 1;
				secondHalf[0] = secondHalf[0] + 1;
				}; 
			if (array.length % 2 === 0) {
				 newSections = [...workingArray[0], ...workingArray[workingArray.length - 1]]; 
				newSections = [...firstHalf, ...secondHalf];
			}
			else {
				 newSections = [...workingArray[0], workingArray[Math.floor(workingArray.length / 2)], ...workingArray[workingArray.length - 1]]; 
				newSections = [...firstHalf, array[Math.floor(array.length / 2)], ...secondHalf];
			};
			// all working as expected for the moment, but the distribution needs to iterate instead of all going on index 0
			// the werid working array thing did not work in its current form
		}
		else {
			console.log('I do not yet know how to handle odd numbers of extra stitches, so they have been tacked on to the end as a new section.');
			newSections = [...array, remainder];
			
			test: 107 stitches, 8 desired sections should return:
			[13, 13, 13, 13, 13, 13, 13, 13, 3]
			PASSED
			
		};	
			// IN PROGRESS
			  let firstHalfSplit = firstHalf.slice(Math.floor(firstHalf.length / 2, firstHalf.length));
				let secondHalfSplit = secondHalf.slice(Math.floor(secondHalf.length / 2, secondHalf.length));
			
			 
			
			test: 106 stitches, 8 desired sections should return:
			[14, 13, 13, 13, 14, 13, 13, 13]
			PASSED
			
		
	
		// quick line to confirm the right number of stitches is present in the new array
		console.log(`Total stitches in newSections: ${newSections.reduce((a, b) => a + b)}`);
		
		return newSections;
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

/* 
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
		};
		
	// quick line to confirm the right number of stitches is present in the new array
	console.log(`Total stitches in newSections: ${newSections.reduce((a, b) => a + b)}`);
			
	return newSections;
	}; */

/* export function splitHistory(array) {
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
}; */

/* 	if (splitArray.length > 2) {
		workingArray.push(firstHalf, rememberMiddleStitch(splitArray), secondHalf);
	}
	else {
		workingArray.push(firstHalf, secondHalf);
	}; */

	// I need to fix this to get dropped middle items to push into the finishedHalf, can probably be done by adding a middle item key into the identify ends function and accounting for that in this one
	// one consideration to keep in mind with what I did here - the iteration will be wonky with odd numbered sections with a remainder close to the number of total sections because of the loss of the middle item (example: 7 sections with a remainder of 6)
	// I've been considering adding the middle item to identifyEnds, that might be a way to help this - there are some arrays where the VERY middle item needs to get a stitch (the fourth item in the above example)
	// right now it will return the correct values for half the array, but the total number of stitches will be a stitch short (in the middle) - this can probably be handled in the broader function that will run this one over both the start and end sections, then check to see if the reduced array contains the right number of stitches - if not it can look for the middle item
	// otherwise this is going well though

	/* while (i > remainder / 2) {
		distributeToArray(array, 1);
		let sections;
		
		if (array.length > 1) {
			nextArray = splitInHalf(array);
			sections = identifyEnds(nextArray);
			
			finishedHalf.push(...sections.start);
			if (sections.hasOwnProperty('middle') && Array.isArray(sections.middle) === false) {
				finishedHalf.push(sections.middle);
			};
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
	return finishedHalf; */

	// console.log('I\'m attached!');
// works

/*
calcButton.addEventListener('click', () => {
	console.log('I can hear you.');
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	console.log(startCount.value, divisions.value, decrease.value);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	const stitches = Number(startCount.value);
	const sections = Number(divisions.value);
	const decreaseBy = Number(decrease.value);
	
	console.log(stitches + sections + decreaseBy);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	const stitches = Number(startCount.value);
	const sections = Number(divisions.value);
	const decreaseBy = Number(decrease.value);
	
	console.log(stitches + sections + decreaseBy);
	results.textContent = stitches + sections + decreaseBy;
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	console.log(toNumber(startCount) + toNumber(divisions) + toNumber(decrease));
	results.textContent = toNumber(startCount) + toNumber(divisions) + toNumber(decrease);
});
*/
// works

/*
calcButton.addEventListener('click', () => {
	let rawValues = [startCount, divisions, decrease];
	let numberBox = rawValues.map(i => toNumber(i));
	console.log(numberBox);
	results.textContent = numberBox.reduce((a, b) => a + b);
});
*/
// works

/*
let rawValues = [startCount, divisions, decrease];
	console.log(mapValueByID(rawValues));
*/
//works

// placeholders to test functions - ALL WORK
/* console.log(`stitchSpecs`, stitchSpecs);

console.log(`planSections`, planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']));

const sectionArray = planSections(stitchSpecs['stitch-count'], stitchSpecs['desired-sections']);

console.log(`splitInHalf`, splitInHalf(sectionArray));

console.log('splitAndAddRemainder', splitAndAddRemainder(sectionArray, stitchSpecs['stitch-count'] % stitchSpecs['desired-sections'])); */

/* console.log('Test values:', populateTests([[43, 2], 9, [0, 0 , 0, 1], {house: 'pink'}, 0, -1]));

console.log('Expected results:', populateResults(['Tuesday', 17, {name: 'Bert'}, [16, 16, 17, 16, 16, 17], 4900, 'pie'])); */

/* let testArgs = populateTests([1, [2, 3, 4], 3, 4, 5, 6, 7]);
let returnValues = populateResults([2, [4, 6, 8], 4, 6, 8, 10, 12, 14]);
// sticking an array in messes with the iteration
console.log (testFunction(a => a * 2, testArgs, returnValues)); */

