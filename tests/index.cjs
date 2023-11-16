const {test} = require('uvu');
const assert = require('uvu/assert');
const colours = require('../index.cjs');

test('main', () => {
	assert.equal(colours.red('foo'), '\u001B[31mfoo\u001B[39m');
});

test.run();
