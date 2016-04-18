var json = require('JSONStream');
var es = require('event-stream');
var wkt = require('terraformer-wkt-parser');
var EE = require('events');

function parseHeaders (stream, path, callback) {
  var headers = { };

  stream.pipe(json.parse(path))
    .pipe(es.through(function write (data) {
      var keys = Object.keys(data.properties);

      for (var i = 0; i < keys.length; i++) {
        headers[keys[i]] = true;
      }

      this.emit(data);
    }, function end () {
      headers.geometry = true;

      callback(null, Object.keys(headers));

      this.emit('end');
    })
  );
}

function detectType (stream, callback) {
  var type;

  stream.pipe(json.parse('type'))
    .pipe(es.through(function write (data) {
      type = data;
      this.emit(data);
    }, function end () {
      callback(null, type);

      this.emit('end');
    })
  );
}

function parseFields (stream, path, headers) {
  var emitter = new EE();

  process.nextTick(function () {
    stream.pipe(json.parse(path))
      .pipe(es.through(function write (data) {
        var fields = { };

        for (var i = 0; i < headers.length; i++) {
          if (headers[i] === 'geometry') {
            fields[headers[i]] = wkt.convert(data.geometry);
          } else {
            fields[headers[i]] = data.properties[headers[i]];
          }
        }

        this.emit(data);
        emitter.emit('data', fields);
      }, function end () {
        this.emit('end');
        emitter.emit('end');
      })
    );
  });

  return emitter;
}

exports.parseHeaders = parseHeaders;
exports.detectType = detectType;
exports.parseFields = parseFields;
