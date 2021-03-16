// import functions to test

const test = QUnit.test;

// sample failing test

test('It should return true', (expect) => {

    const expected = true;
    const actual = false;
    
	expect.equal(actual, expected);
});
