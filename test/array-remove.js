/* global describe, it */
'use strict';

var assert = require('assert');
var remove = require('array-remove');


describe('array-remove', function() {
  it('should remove', function(done) {
    var arr = ['foo', 'bar', 2];
    assert.equal(remove(arr, 'foo'), true);
    assert.equal(arr.length, 2);
    assert.equal(remove(arr, 2), true);
    assert.equal(remove(arr, 9), false);
    assert.equal(arr.length, 1);
    assert.equal(arr[0], 'bar');
    done();
  });
});
