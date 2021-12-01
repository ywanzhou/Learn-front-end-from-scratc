# md2i

[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> Awesome node modules.

## Installation

```shell
$ npm install md2i

# or yarn
$ yarn add md2i
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const md2I = require('md2i')
const result = md2I('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### md2I(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx md2i <input> [options]
```

Globally install:

```shell
$ npm install md2i -g
# or yarn
$ yarn global add md2i
```

```shell
$ md2i --help
demo v0.1.0

Usage:
  $ md2i <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ md2i --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ md2i w --host zce.me
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [icoderYY](http://zcegg.com)



[license-img]: https://img.shields.io/github/license/zcegg/md2i
[license-url]: https://github.com/zcegg/md2i/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/md2i
[downloads-url]: https://npmjs.org/package/md2i
[version-img]: https://img.shields.io/npm/v/md2i
[version-url]: https://npmjs.org/package/md2i
[dependency-img]: https://img.shields.io/david/zcegg/md2i
[dependency-url]: https://david-dm.org/zcegg/md2i
[devdependency-img]: https://img.shields.io/david/dev/zcegg/md2i
[devdependency-url]: https://david-dm.org/zcegg/md2i?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
