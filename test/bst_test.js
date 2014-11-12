'use strict';

var expect = require('chai').expect;
var bst = require('../lib/bst');

describe('Binary Search Tree', function() {
  var input = [4, 2, 6, 1, 3, 5, 7];
  var arr;
  var i;

  beforeEach(function() {
    bst.clear();
    for (i = 0; i < input.length; i++) {
      bst.insert(input[i]);
    }
  });

  it('should return an in-order array of data', function() {
    var inOrder = [1, 2, 3, 4, 5, 6, 7];
    arr = bst.inOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(input.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(inOrder[i]);
    }
  });

  it('should return a pre-order array of data', function() {
    var preOrder = [4, 2, 1, 3, 6, 5, 7];
    arr = bst.preOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(input.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(preOrder[i]);
    }
  });

  it('should return a post-order array of data', function() {
    var postOrder = [1, 3, 2, 5, 7, 6, 4];
    arr = bst.postOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(input.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(postOrder[i]);
    }
  });

  it('should find the minimum data in the list', function() {
    expect(bst.getMin()).to.equal(1);
  });

  it('should find the maximum data in the list', function() {
    expect(bst.getMax()).to.equal(7);
  });

  it('should find if the specified data is in the list', function() {
    expect(!!bst.find(1)).to.equal(true);
    expect(!!bst.find(7)).to.equal(true);
    expect(!!bst.find(4)).to.equal(true);
  });

  it('should not find specified data not in the list', function() {
    expect(!!bst.find(0)).to.equal(false);
    expect(!!bst.find(8)).to.equal(false);
  });

  it('can remove a node without children', function() {
    var inOrder = [1, 2, 4, 5, 6, 7];
    bst.remove(3);
    arr = bst.inOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(inOrder.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(inOrder[i]);
    }
  });

  it('can remove a node with only left child', function() {
    var inOrder = [1, 4, 5, 6, 7];
    bst.remove(3);
    bst.remove(2);
    arr = bst.inOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(inOrder.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(inOrder[i]);
    }
  });

  it('can remove a node with only right child', function() {
    var inOrder = [1, 2, 3, 4, 7];
    bst.remove(5);
    bst.remove(6);
    arr = bst.inOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(inOrder.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(inOrder[i]);
    }
  });

  it('can remove a node with both children', function() {
    var inOrder = [1, 2, 3, 5, 6, 7];
    bst.remove(4);
    arr = bst.inOrder();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(inOrder.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(inOrder[i]);
    }
  });

  it('should return the number of nodes', function() {
    expect(bst.getNumberOfNodes()).to.equal(7);
  });

  it('should return a pre-order array of edges', function() {
    var preOrder = [1, 3, 5, 7];
    arr = bst.preOrderEdges();
    expect(Array.isArray(arr)).to.equal(true);
    expect(arr.length).to.equal(preOrder.length);

    for (i = 0; i < arr.length; i++) {
      expect(arr[i]).to.equal(preOrder[i]);
    }
  });

  it('should return the number of edges', function() {
    expect(bst.getNumberOfEdges()).to.equal(4);
  });
});
