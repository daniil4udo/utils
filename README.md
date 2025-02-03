<h1 align='center'><samp>@democrance/utils</samp></h1>

[![package version](https://img.shields.io/npm/v/@democrance/utils.svg?style=flat-square)](https://npmjs.org/package/@democrance/utils)
[![package downloads](https://img.shields.io/npm/dm/@democrance/utils.svg?style=flat-square)](https://npmjs.org/package/@democrance/utils)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@democrance/utils.svg?style=flat-square)](https://npmjs.org/package/@democrance/utils)

`@democrance/utils` is a set of popular utility functions.

List of all function you can find [HERE](./docs/modules.md)

## Table of Contents

- [@democrance/utils](#democranceutils)
    - [Table of Contents](#table-of-contents)
    - [Install](#install)
    - [Usage](#usage)
- [Auto imports](#auto-imports)
    - [Contributing](#contributing)
    - [License](#license)

## Install

Install the package locally within your project folder using your preferred package manager:

```sh
pnpm install @democrance/utils
```

## Usage

To use the utility functions provided by @democrance/utils, import them into your code and utilize them as needed.

Example:

```ts
import { utilityFunction1, utilityFunction2 } from '@democrance/utils';

// Use the imported utility functions
const result = utilityFunction1(argument);
// ...
```

# Auto imports

If you are using the `unplugin-auto-import plugin`, you can include the `dist/autoImportUtilsPreset.json` file in the presets options.

This will enable automatic importing of the utility functions.

```ts
import dmcUtilsPreset from '@democrance/utils/preset';

// for Vite
export default defineConfig({
    plugins: [
        ViteAutoImportPlugin({
            imports: [
                dmcUtilsPreset,
                // rest presets...
            ],
        })
        // rest plugins ...
    ]
});
```

## Contributing

Contributions are welcome! If you have ideas for new features or have found a bug, please open an issue or make a pull request on [make a pull request](https://makeapullrequest.com/) or [open up an issue](https://github.com/daniil4udo/utils/issues).

## License

This project is licensed under the [MIT © Daniil Chumachenko](./LICENSE)
