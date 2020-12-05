// Code Scrapyard
/*
function planDecrease(startCount, decCount, divisions) {
	let round = 0;
	let sections = [];
	if (startCount % divisions === 0) {
		for (let i = 0; i < divisions - 1; i++) {
			sections.push(startCount / divisions);
		};
	}
	else if (!divisions % 2 === 0) {
		console.log('This is an odd number of divisions, please start over with an even number.');
	}
	else if (startCount % 2 === 0) {
		// divide up sections reasonably and distribute stray stitches
		let baseSection = startCount - (startCount % divisions);
		for (let i = 0; i < divisions - 2; i++) {
			sections.push(baseSection / divisions);
		};
		sections.push(startCount % divisions);
		// example: [6, 6, 6, 6, 6, 4] (startCount 34, divisions 6)

		// [6, 5, 6, 6, 5, 6] < that might be an ideal balance
		// [6, 6, 6, 6, 6, 4] < plus two to final index, minus one from second and next to last

		/*for (let factor = divisions - 2; factor > 2; factor -= 2) {
			if (startCount % factor === 0) {
				let baseSectionCount = startCount / factor;

			}
		}
	}
	else {
		// distribute stray stitch and then go back up to the else if probably
	}
}
*/