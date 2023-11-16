import {suite} from 'uvu';
import * as assert from 'uvu/assert';
import * as colours from '../index.browser.js';

const browser = suite('browser build');

browser('should not format strings', () => {
	assert.equal(colours.cyan('foo'), 'foo');
});

browser('should not format strings when nested', () => {
	assert.equal(colours.bold(colours.cyan('foo')), 'foo');
});

browser.run();
