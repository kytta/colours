const {suite} = require('uvu');
const assert = require('uvu/assert');
const colours = require('../index.cjs');

const cjs = suite('CommonJS build');

cjs('formats strings', () => {
	assert.equal(colours.cyan('foo'), '\u001B[36mfoo\u001B[39m');
});

cjs('can be nested', () => {
	assert.equal(colours.bold(colours.cyan('foo')), '\u001B[1m\u001B[36mfoo\u001B[39m\u001B[22m');
});

cjs('can be complexly nested', () => {
	assert.equal(`${colours.bold('foo')} bar ${colours.cyan('baz')}`,
		'\u001B[1mfoo\u001B[22m bar \u001B[36mbaz\u001B[39m');
});

cjs.run();
