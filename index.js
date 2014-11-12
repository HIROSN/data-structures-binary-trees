'use strict';

var fs = require('fs');
var bst = require('./lib/bst');
var path = process.argv[2] || 'test/jsda.txt';

fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
  var words = data.toLowerCase().
    replace(/\,\s+/g, '\n').
    replace(/\.\s+/g, '\n').
    replace(/\?\s/g, '\n').
    replace(/ /g, '\n').
    split('\n');

  var previous;
  var count = 0;
  var i;

  for (i = 0; i < words.length; i++) {
    var word = words[i].trim();

    if (word) {
      bst.insert(word);
    }
  }

  words = bst.inOrder();
  console.log('\n' + path, 'contains:');

  for (i = 0; i <= words.length; i++) {
    if (words[i] !== previous && count) {
      console.log('  %d times\t%s', count, previous);
      count = 0;
    }
    previous = words[i];
    ++count;
  }
});
