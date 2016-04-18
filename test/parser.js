var test = require('tape');
var fs = require('fs');

var parser = require('../lib/parser');

test('parseHeaders', function (t) {
  t.plan(2);

  var d = fs.createReadStream(__dirname + '/data/tm_rail_stops.json');

  parser.parseHeaders(d, 'features.*', function (err, headers) {
    t.equal(err, null, 'no error is returned');
    t.equal(headers.length, 5, 'the correct number of headers is returned');
  });
});

test('detectType', function (t) {
  t.plan(4);

  var d1 = fs.createReadStream(__dirname + '/data/tm_rail_stops.json');
  var d2 = fs.createReadStream(__dirname + '/data/feature.json');

  parser.detectType(d1, function (err, type) {
    t.equal(err, null, 'no error is returned');
    t.equal(type, 'FeatureCollection', 'the type is correctly chosen as FeatureCollection');
  });

  parser.detectType(d2, function (err, type) {
    t.equal(err, null, 'no error is returned');
    t.equal(type, 'Feature', 'the type is correctly chosen as Feature');
  });
});

test('parseFields', function (t) {
  t.plan(3);

  var d = fs.createReadStream(__dirname + '/data/tm_rail_stops.json', 'utf8');

  var results = [ ];

  var e = parser.parseFields(d, 'features.*', [ 'STATION', 'TYPE', 'LINE', 'STATUS', 'geometry' ]);

  e.on('data', function (data) {
    results.push(data);
  });

  e.on('end', function () {
    t.equal(results.length, 3, 'three results should be found');
    t.equal(Object.keys(results[0]).length, 5, 'five columns should be found');
    t.equal(results[0].geometry, 'POINT (-122.66193382499806 45.516937208047516)', 'the correct point is mapped');
  });
});
