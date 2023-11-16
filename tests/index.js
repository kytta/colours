import {suite} from 'uvu';
import * as assert from 'uvu/assert';
import * as colours from '../index.js';

const esm = suite('ESM build');

esm('formats strings', () => {
	assert.equal(colours.cyan('foo'), '\u001B[36mfoo\u001B[39m');
});

esm('can be nested', () => {
	assert.equal(colours.bold(colours.cyan('foo')), '\u001B[1m\u001B[36mfoo\u001B[39m\u001B[22m');
});

esm('can be complexly nested', () => {
	assert.equal(`${colours.bold('foo')} bar ${colours.cyan('baz')}`,
		'\u001B[1mfoo\u001B[22m bar \u001B[36mbaz\u001B[39m');
});

esm.run();
