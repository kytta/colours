const noop = string => string;

// Intentionally not using template literal for performance.
export const reset = noop;
export const bold = noop;
export const dim = noop;
export const italic = noop;
export const underline = noop;

// Blink is intentionally left out
//   => https://github.com/chalk/ansi-styles/pull/6

export const inverse = noop;
export const hidden = noop;
export const strikethrough = noop;
export const overline = noop;

export const black = noop;
export const red = noop;
export const green = noop;
export const yellow = noop;
export const blue = noop;
export const magenta = noop;
export const cyan = noop;
export const white = noop;

export const blackBright = noop;
export const grey = noop;
export const gray = noop;
export const redBright = noop;
export const greenBright = noop;
export const yellowBright = noop;
export const blueBright = noop;
export const magentaBright = noop;
export const cyanBright = noop;
export const whiteBright = noop;

export const bgBlack = noop;
export const bgRed = noop;
export const bgGreen = noop;
export const bgYellow = noop;
export const bgBlue = noop;
export const bgMagenta = noop;
export const bgCyan = noop;
export const bgWhite = noop;

export const bgBlackBright = noop;
export const bgGrey = noop;
export const bgGray = noop;
export const bgRedBright = noop;
export const bgGreenBright = noop;
export const bgYellowBright = noop;
export const bgBlueBright = noop;
export const bgMagentaBright = noop;
export const bgCyanBright = noop;
export const bgWhiteBright = noop;
