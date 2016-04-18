var CSV = require('object-to-csv-stream');
var parser = require('./lib/parser');
var fs = require('fs');

function createCSVStream (fileName, callback) {
  var inStream = fs.createReadStream(fileName);

  // figure out what type of geojson we are parsing
  parser.detectType(inStream, function (err, type) {
    if (err) {
      return callback(err);
    }

    var path;

    if (type === 'FeatureCollection') {
      path = 'features.*';
    } else if (type === 'Feature') {
      path = '*';
    } else {
      path = '*';
    }

    inStream = fs.createReadStream(fileName);

    parser.parseHeaders(inStream, path, function (err, headers) {
      if (err) {
        return callback(err);
      }

      inStream = fs.createReadStream(fileName);
      var exportStream = new CSV(headers);

      process.nextTick(function () {
        var ee = parser.parseFields(inStream, path, headers);

        ee.on('data', function (data) {
          exportStream.write(data);
        });
        ee.on('end', function () {
          exportStream.end();
        });
      });

      callback(null, exportStream);
    });
  });
}

exports.createCSVStream = createCSVStream;
