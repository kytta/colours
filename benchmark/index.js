#!/usr/bin/env node

import {Bench, hrtimeNow} from 'tinybench';
import ansi from 'ansi-colors';
import chalk4 from 'chalk-4';
import chalk from 'chalk-5';
import cliColor from 'cli-color';
import * as colorette from 'colorette';
import kleur from 'kleur';
import * as kleurColors from 'kleur/colors';
import * as nanocolors from 'nanocolors';
import picocolors from 'picocolors';
import * as yoctocolors from 'yoctocolors';
import * as colours from '../index.js';

const bench = new Bench({
	time: 100,
	iterations: 1_000_000,
	warmupTime: 1000,
	warmupIterations: 10_000_000,
	now: hrtimeNow
});

// eslint-disable-next-line no-unused-vars
let out;

bench
	.add('@kytta/colours', () => {
		out = colours.magenta('Starburst that\'s coloured pink');
		out = colours.blue('My inside\'s coloured blue, but girl');
		out = colours.green('My Range is coloured green');
	})
	.add('yoctocolors', () => {
		out = yoctocolors.magenta('Starburst that\'s coloured pink');
		out = yoctocolors.blue('My inside\'s coloured blue, but girl');
		out = yoctocolors.green('My Range is coloured green');
	})
	.add('cli-color', () => {
		out = cliColor.magenta('Starburst that\'s coloured pink');
		out = cliColor.blue('My inside\'s coloured blue, but girl');
		out = cliColor.green('My Range is coloured green');
	})
	.add('ansi-colors', () => {
		out = ansi.magenta('Starburst that\'s coloured pink');
		out = ansi.blue('My inside\'s coloured blue, but girl');
		out = ansi.green('My Range is coloured green');
	})
	.add('chalk@4', () => {
		out = chalk4.magenta('Starburst that\'s coloured pink');
		out = chalk4.blue('My inside\'s coloured blue, but girl');
		out = chalk4.green('My Range is coloured green');
	})
	.add('chalk@5', () => {
		out = chalk.magenta('Starburst that\'s coloured pink');
		out = chalk.blue('My inside\'s coloured blue, but girl');
		out = chalk.green('My Range is coloured green');
	})
	.add('kleur', () => {
		out = kleur.magenta('Starburst that\'s coloured pink');
		out = kleur.blue('My inside\'s coloured blue, but girl');
		out = kleur.green('My Range is coloured green');
	})
	.add('kleur/colors', () => {
		out = kleurColors.magenta('Starburst that\'s coloured pink');
		out = kleurColors.blue('My inside\'s coloured blue, but girl');
		out = kleurColors.green('My Range is coloured green');
	})
	.add('colorette', () => {
		out = colorette.magenta('Starburst that\'s coloured pink');
		out = colorette.blue('My inside\'s coloured blue, but girl');
		out = colorette.green('My Range is coloured green');
	})
	.add('nanocolors', () => {
		out = nanocolors.magenta('Starburst that\'s coloured pink');
		out = nanocolors.blue('My inside\'s coloured blue, but girl');
		out = nanocolors.green('My Range is coloured green');
	})
	.add('picocolors', () => {
		out = picocolors.magenta('Starburst that\'s coloured pink');
		out = picocolors.blue('My inside\'s coloured blue, but girl');
		out = picocolors.green('My Range is coloured green');
	});

await bench.run();

const {tasks} = bench;
tasks.sort((t1, t2) => t2.result.hz - t1.result.hz);
console.table(tasks.map(({name, result}) => {
	if (!result) {
		return null;
	}

	return {
		Library: name,
		'ops/sec': result.error ? 'NaN' : Number.parseInt(result.hz.toString(), 10).toLocaleString(),
	};
}));
