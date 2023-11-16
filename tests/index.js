import {test} from 'uvu';
import * as assert from 'uvu/assert';
import * as colours from '../index.js';

test('main', () => {
	assert.equal(colours.red('foo'), '\u001B[31mfoo\u001B[39m');
});

test.run();
