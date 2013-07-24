Package.describe({
  summary: "Meteor UI Components framework"
});

Package.on_use(function (api) {
  api.use('deps');
  api.use('random');
  api.use('ejson');
  api.use('ordered-dict');

  api.add_files(['base.js']);
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('ui2');
  api.use(['test-helpers', 'underscore'], 'client');

  api.add_files([
    'base_tests.js'
  ], 'client');
});
