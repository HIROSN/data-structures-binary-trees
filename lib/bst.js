'use strict';

module.exports = function() {
  var rootNode = null;

  var bst = {
    clear: function() {
      rootNode = null;
    },

    insert: function(data) {
      var node = {data: data};
      var current = rootNode;
      var parent;

      while (current) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (!current) {
            parent.left = node;
            return this;
          }
        } else {
          current = current.right;
          if (!current) {
            parent.right = node;
            return this;
          }
        }
      }

      rootNode = node;
      return this;
    },

    inOrder: function() {
      return (function inOrderRecursive(node) {
        if (!node) { return []; }
        var arr = inOrderRecursive(node.left);
        arr.push(node.data);
        return arr.concat(inOrderRecursive(node.right));
      })(rootNode);
    },

    preOrder: function() {
      return (function preOrderRecursive(node) {
        if (!node) { return []; }
        return [node.data]
        .concat(preOrderRecursive(node.left))
        .concat(preOrderRecursive(node.right));
      })(rootNode);
    },

    postOrder: function() {
      return (function postOrderRecursive(node) {
        if (!node) { return []; }
        var arr = postOrderRecursive(node.left)
        .concat(postOrderRecursive(node.right));
        arr.push(node.data);
        return arr;
      })(rootNode);
    },

    getMin: function() {
      return (function min(node) {
        return node && (node.left && min(node.left) || node.data);
      })(rootNode);
    },

    getMax: function() {
      return (function max(node) {
        return node && (node.right && max(node.right) || node.data);
      })(rootNode);
    },

    find: function(data) {
      return (function findRecursive(node, data) {
        return node && (data === node.data ||
          data < node.data && findRecursive(node.left, data) ||
          data >= node.data && findRecursive(node.right, data));
      })(rootNode, data);
    },

    remove: function(data) {
      rootNode = this.removeNode(rootNode, data);
    },

    getSmallest: function(node) {
      return node && (this.getSmallest(node.left) || node.left);
    },

    removeNode: function(node, data) {
      if (!node) { return null; }

      if (data === node.data) {
        if (!node.left && !node.right) { return null; }
        if (!node.left) { return node.right; }
        if (!node.right) { return node.left; }
        var temp = this.getSmallest(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
        return node;
      }

      if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      }

      node.right = this.removeNode(node.right, data);
      return node;
    },

    getNumberOfNodes: function() {
      return this.inOrder().length;
    },

    preOrderEdges: function() {
      return (function preOrderRecursive(node) {
        if (!node) { return []; }
        return (node.left || node.right ? [] : [node.data])
        .concat(preOrderRecursive(node.left))
        .concat(preOrderRecursive(node.right));
      })(rootNode);
    },

    getNumberOfEdges: function() {
      return this.preOrderEdges().length;
    }
  };

  return bst;
}();
