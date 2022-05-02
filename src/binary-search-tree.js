const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.arr = [];
    this.newObj = { data: null };    
  }
  
  root() {    
    if (this.arr.length === 0) return null;
    this.newObj.data = this.arr[0];
    return this.newObj;
  }

  add(data) {
    this.arr.push(data);
  }

  has(data) {
    let index = this.arr.indexOf(data);
    if (index !== -1)  {      
      return true
    } else {      
      return false
    }
  }

  find(data) {
    let index = this.arr.indexOf(data);
     if (index !== -1) {      
      this.newObj.data = this.arr[index]       
      return this.newObj
    } else {     
      return null
    }
  }

  remove(data) {
    let index = this.arr.indexOf(data);
    if (index !== -1) this.arr.splice(index, 1);
  }

  min() {
    if (this.arr.length === 0) return null;
    let sortArr = this.arr;
    sortArr.sort(function(a, b) {
      return a - b;
    });    
    return sortArr[0];
  }

  max() {
    if (this.arr.length === 0) return null;
    let sortArr = this.arr;
    sortArr.sort(function(a, b) {
      return b - a;
    });    
    return sortArr[0];  
  }
}

module.exports = {
  BinarySearchTree
};