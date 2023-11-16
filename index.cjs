// eslint-disable-next-line unicorn/prefer-node-protocol
const tty = require('tty');

const hasColors = tty.WriteStream.prototype.hasColors();

module.exports = {
	reset: hasColors ? string => '\u001B[0m' + string + '\u001B[0m' : string => string,
	bold: hasColors ? string => '\u001B[1m' + string + '\u001B[22m' : string => string,
	dim: hasColors ? string => '\u001B[2m' + string + '\u001B[22m' : string => string,
	italic: hasColors ? string => '\u001B[3m' + string + '\u001B[23m' : string => string,
	underline: hasColors ? string => '\u001B[4m' + string + '\u001B[24m' : string => string,
	inverse: hasColors ? string => '\u001B[7m' + string + '\u001B[27m' : string => string,
	hidden: hasColors ? string => '\u001B[8m' + string + '\u001B[28m' : string => string,
	strikethrough: hasColors ? string => '\u001B[9m' + string + '\u001B[29m' : string => string,
	overline: hasColors ? string => '\u001B[53m' + string + '\u001B[55m' : string => string,

	black: hasColors ? string => '\u001B[30m' + string + '\u001B[39m' : string => string,
	red: hasColors ? string => '\u001B[31m' + string + '\u001B[39m' : string => string,
	green: hasColors ? string => '\u001B[32m' + string + '\u001B[39m' : string => string,
	yellow: hasColors ? string => '\u001B[33m' + string + '\u001B[39m' : string => string,
	blue: hasColors ? string => '\u001B[34m' + string + '\u001B[39m' : string => string,
	magenta: hasColors ? string => '\u001B[35m' + string + '\u001B[39m' : string => string,
	cyan: hasColors ? string => '\u001B[36m' + string + '\u001B[39m' : string => string,
	white: hasColors ? string => '\u001B[37m' + string + '\u001B[39m' : string => string,

	blackBright: hasColors ? string => '\u001B[90m' + string + '\u001B[39m' : string => string,
	grey: hasColors ? string => '\u001B[90m' + string + '\u001B[39m' : string => string,
	gray: hasColors ? string => '\u001B[90m' + string + '\u001B[39m' : string => string,
	redBright: hasColors ? string => '\u001B[91m' + string + '\u001B[39m' : string => string,
	greenBright: hasColors ? string => '\u001B[92m' + string + '\u001B[39m' : string => string,
	yellowBright: hasColors ? string => '\u001B[93m' + string + '\u001B[39m' : string => string,
	blueBright: hasColors ? string => '\u001B[94m' + string + '\u001B[39m' : string => string,
	magentaBright: hasColors ? string => '\u001B[95m' + string + '\u001B[39m' : string => string,
	cyanBright: hasColors ? string => '\u001B[96m' + string + '\u001B[39m' : string => string,
	whiteBright: hasColors ? string => '\u001B[97m' + string + '\u001B[39m' : string => string,

	bgBlack: hasColors ? string => '\u001B[40m' + string + '\u001B[49m' : string => string,
	bgRed: hasColors ? string => '\u001B[41m' + string + '\u001B[49m' : string => string,
	bgGreen: hasColors ? string => '\u001B[42m' + string + '\u001B[49m' : string => string,
	bgYellow: hasColors ? string => '\u001B[43m' + string + '\u001B[49m' : string => string,
	bgBlue: hasColors ? string => '\u001B[44m' + string + '\u001B[49m' : string => string,
	bgMagenta: hasColors ? string => '\u001B[45m' + string + '\u001B[49m' : string => string,
	bgCyan: hasColors ? string => '\u001B[46m' + string + '\u001B[49m' : string => string,
	bgWhite: hasColors ? string => '\u001B[47m' + string + '\u001B[49m' : string => string,

	bgBlackBright: hasColors ? string => '\u001B[100m' + string + '\u001B[49m' : string => string,
	bgGrey: hasColors ? string => '\u001B[100m' + string + '\u001B[49m' : string => string,
	bgGray: hasColors ? string => '\u001B[100m' + string + '\u001B[49m' : string => string,
	bgRedBright: hasColors ? string => '\u001B[101m' + string + '\u001B[49m' : string => string,
	bgGreenBright: hasColors ? string => '\u001B[102m' + string + '\u001B[49m' : string => string,
	bgYellowBright: hasColors ? string => '\u001B[103m' + string + '\u001B[49m' : string => string,
	bgBlueBright: hasColors ? string => '\u001B[104m' + string + '\u001B[49m' : string => string,
	bgMagentaBright: hasColors ? string => '\u001B[105m' + string + '\u001B[49m' : string => string,
	bgCyanBright: hasColors ? string => '\u001B[106m' + string + '\u001B[49m' : string => string,
	bgWhiteBright: hasColors ? string => '\u001B[107m' + string + '\u001B[49m' : string => string,
};
