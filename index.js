// eslint-disable-next-line unicorn/prefer-node-protocol
import tty from 'tty';

const hasColors = tty.WriteStream.prototype.hasColors();

// Intentionally not using template literal for performance.
export const reset = hasColors ? string => '\u001B[0m' + string + '\u001B[0m' : string => string;
export const bold = hasColors ? string => '\u001B[1m' + string + '\u001B[22m' : string => string;
export const dim = hasColors ? string => '\u001B[2m' + string + '\u001B[22m' : string => string;
export const italic = hasColors ? string => '\u001B[3m' + string + '\u001B[23m' : string => string;
export const underline = hasColors ? string => '\u001B[4m' + string + '\u001B[24m' : string => string;

// blink is intentionally left out
//   => https://github.com/chalk/ansi-styles/pull/6

export const inverse = hasColors ? string => '\u001B[7m' + string + '\u001B[27m' : string => string;
export const hidden = hasColors ? string => '\u001B[8m' + string + '\u001B[28m' : string => string;
export const strikethrough = hasColors ? string => '\u001B[9m' + string + '\u001B[29m' : string => string;
export const overline = hasColors ? string => '\u001B[53m' + string + '\u001B[55m' : string => string;

export const black = hasColors ? string => '\u001B[30m' + string + '\u001B[39m' : string => string;
export const red = hasColors ? string => '\u001B[31m' + string + '\u001B[39m' : string => string;
export const green = hasColors ? string => '\u001B[32m' + string + '\u001B[39m' : string => string;
export const yellow = hasColors ? string => '\u001B[33m' + string + '\u001B[39m' : string => string;
export const blue = hasColors ? string => '\u001B[34m' + string + '\u001B[39m' : string => string;
export const magenta = hasColors ? string => '\u001B[35m' + string + '\u001B[39m' : string => string;
export const cyan = hasColors ? string => '\u001B[36m' + string + '\u001B[39m' : string => string;
export const white = hasColors ? string => '\u001B[37m' + string + '\u001B[39m' : string => string;

export const blackBright = hasColors ? string => '\u001B[90m' + string + '\u001B[39m' : string => string;
export const grey = blackBright;
export const gray = blackBright;
export const redBright = hasColors ? string => '\u001B[91m' + string + '\u001B[39m' : string => string;
export const greenBright = hasColors ? string => '\u001B[92m' + string + '\u001B[39m' : string => string;
export const yellowBright = hasColors ? string => '\u001B[93m' + string + '\u001B[39m' : string => string;
export const blueBright = hasColors ? string => '\u001B[94m' + string + '\u001B[39m' : string => string;
export const magentaBright = hasColors ? string => '\u001B[95m' + string + '\u001B[39m' : string => string;
export const cyanBright = hasColors ? string => '\u001B[96m' + string + '\u001B[39m' : string => string;
export const whiteBright = hasColors ? string => '\u001B[97m' + string + '\u001B[39m' : string => string;

export const bgBlack = hasColors ? string => '\u001B[40m' + string + '\u001B[49m' : string => string;
export const bgRed = hasColors ? string => '\u001B[41m' + string + '\u001B[49m' : string => string;
export const bgGreen = hasColors ? string => '\u001B[42m' + string + '\u001B[49m' : string => string;
export const bgYellow = hasColors ? string => '\u001B[43m' + string + '\u001B[49m' : string => string;
export const bgBlue = hasColors ? string => '\u001B[44m' + string + '\u001B[49m' : string => string;
export const bgMagenta = hasColors ? string => '\u001B[45m' + string + '\u001B[49m' : string => string;
export const bgCyan = hasColors ? string => '\u001B[46m' + string + '\u001B[49m' : string => string;
export const bgWhite = hasColors ? string => '\u001B[47m' + string + '\u001B[49m' : string => string;

export const bgBlackBright = hasColors ? string => '\u001B[100m' + string + '\u001B[49m' : string => string;
export const bgGrey = bgBlackBright;
export const bgGray = bgBlackBright;
export const bgRedBright = hasColors ? string => '\u001B[101m' + string + '\u001B[49m' : string => string;
export const bgGreenBright = hasColors ? string => '\u001B[102m' + string + '\u001B[49m' : string => string;
export const bgYellowBright = hasColors ? string => '\u001B[103m' + string + '\u001B[49m' : string => string;
export const bgBlueBright = hasColors ? string => '\u001B[104m' + string + '\u001B[49m' : string => string;
export const bgMagentaBright = hasColors ? string => '\u001B[105m' + string + '\u001B[49m' : string => string;
export const bgCyanBright = hasColors ? string => '\u001B[106m' + string + '\u001B[49m' : string => string;
export const bgWhiteBright = hasColors ? string => '\u001B[107m' + string + '\u001B[49m' : string => string;
