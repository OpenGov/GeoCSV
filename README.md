# geocsv

[travis-image]: https://img.shields.io/travis/OpenGov/geocsv.svg?style=flat-square
[travis-url]: https://travis-ci.org/OpenGov/geocsv
[standard-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/semistandard

GeoJSON to CSV module

## Install

```
npm install geocsv
```

## Usage

```js
var geocsv = require('geocsv');

geocsv.createCSVStream(filename, function (err, stream) {
  stream.on('data', function (data) {
    console.log(data.toString());
  });
});
```

All fields from `properties` are mapped as a column, and `geometry` is converted
into _Well Known Text_.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)
