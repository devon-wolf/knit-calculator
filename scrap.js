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