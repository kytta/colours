# colours

> The second-smallest and second-fastest command-line colouring package on the internet

_Check out [the alternatives](#prior-art) for more packages like this._

## Highlights

- Tiny
- Fast
- Tree-shakeable
- No dependencies
- Actively maintained
- Supports [`NO_COLOR`][no-color] & `FORCE_COLOR`
- Supports bright colours
- Can be composed (WIP)
- Works in browsers (WIP)
- Works on CommonJS

## Install

```sh
pnpm add @kytta/colours
```

## Usage

```js
import * as colours from "@kytta/colours";

console.log(colours.red("Yo!"));
```

_This package supports [basic color detection](https://nodejs.org/api/tty.html#writestreamhascolorscount-env). Colors can be forcefully enabled by setting the `FORCE_COLOR` environment variable to `1` and can be forcefully disabled by setting `NO_COLOR` or `NODE_DISABLE_COLORS` to any value. [More info.](https://nodejs.org/api/tty.html#writestreamgetcolordepthenv)_

## Styles

### Modifiers

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. _(Not widely supported)_
- `underline` - Put a horizontal line above the text. _(Not widely supported)_
- `overline` - Put a horizontal line below the text. _(Not widely supported)_
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `strikethrough` - Put a horizontal line through the center of the text. _(Not widely supported)_

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgGray`

## Prior art

Yes:

- [yoctocolors] by Sindre Sorhus. This is a fork of it.
- [picocolors] by Alexey Raspopov. As small as it can get.
- [nanocolors] by Andrey Sitnik. A fork of colorette with hacks from kleur/colors.
- [colorette] by Jorge Bucaran. The OG lightweight command-line colouring library.
- [kleur] by Luke Edwards. Supports nesting and chaining
- [chalk] by Sindre Sorhus. The most advanced of the bunch. Supports all RGB colours with graceful degradation, and more.
- [ansi-colors] by Brian Woodward. A (then) faster drop-in replacement for Chalk without the bugs of other libraries.
- [cli-color] by Mariusz Nowak. Supports 256 colours with some nice features added on top.

## Benchmark

This is outdated.

```sh
$ ./benchmark/index.js
┌─────────┬──────────────────┬──────────────┐
│ (index) │     Library      │   ops/sec    │
├─────────┼──────────────────┼──────────────┤
│    0    │ '@kytta/colours' │ '27.725.838' │
│    1    │  'yoctocolors'   │ '26.188.058' │
│    2    │   'nanocolors'   │ '17.240.092' │
│    3    │   'picocolors'   │ '16.857.757' │
│    4    │   'colorette'    │ '16.798.142' │
│    5    │  'kleur/colors'  │ '16.535.599' │
│    6    │     'kleur'      │ '10.393.367' │
│    7    │    'chalk@5'     │ '10.101.294' │
│    8    │    'chalk@4'     │ '9.207.347'  │
│    9    │  'ansi-colors'   │ '3.825.073'  │
│   10    │   'cli-color'    │  '806.073'   │
└─────────┴──────────────────┴──────────────┘
```

_See [benchmark/index.js](benchmark/index.js)._

## License

© 2023 [Nikita Karamov]\
Licensed under the [MIT License].

Based on [yoctocolors].\
© [Sindre Sorhus]\
Licensed under the [MIT License].

---

This project is hosted on GitHub: <https://github.com/kytta/colours.git>

[no-color]: https://no-color.org/
[ansi-colors]: https://github.com/doowb/ansi-colors
[chalk]: https://github.com/chalk/chalk
[cli-color]: https://github.com/medikoo/cli-color
[colorette]: https://github.com/jorgebucaran/colorette
[kleur]: https://github.com/lukeed/kleur
[nanocolors]: https://github.com/ai/nanocolors
[picocolors]: https://github.com/alexeyraspopov/picocolors
[yoctocolors]: https://github.com/sindresorhus/yoctocolors
[mit license]: https://spdx.org/licenses/MIT.html
[nikita karamov]: https://www.kytta.dev/
[sindre sorhus]: https://sindresorhus.com
