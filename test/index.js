var test = require('tape');
var transformer = require('../index');

test('Test Stream for FeatureCollection', function (t) {
  t.plan(4);

  var results = [ ];
  transformer.createCSVStream(__dirname + '/data/tm_rail_stops.json', function (err, stream) {
    t.equal(err, null, 'no error is returned');

    stream.on('data', function (data) {
      results.push(data);
    });

    stream.on('end', function () {
      t.equal(results.length, 4, 'there are 4 results');
      var row = results[1].toString().split(',');
      t.equal(row.length, 5, 'there are 5 columns');
      t.equal(row[4], '"POINT (-122.66193382499806 45.516937208047516)"\n', 'points are converted');
    });
  });
});
