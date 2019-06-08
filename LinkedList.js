/*
  #################
  How testing works
  #################

  Tests start blocked off to run a set of tests remove the 'x' before the set's describe block.
  Ex. Go to line 11 of LinkedList.test.js.
      Remove the 'x'. 
      Run 'npm run test' to see failing tests. 
      Make them pass.


  #############################
  Suggested Order of Completion
  #############################

  1. Create Node Class
  2. Create Singlely Linked List Class With Below Methods
    --Value Based Methods--
    a. size
    b. addToTail
    c. addToHead
    d. removeHead
    e. removeTail
    f. contains
    g. removeValue
    h. forEach
    i. reverseList
    --Node Based Methods--
    i. addTailNode
    j. addHeadNode
    k. containsNode
    l. removeNode
    m. moveToTail
    n. moveToHead
  3. Refactor below to Doubly Linked List Class
    a. Node Class
    b. addToTail
    c. addToHead
    d. removeHead
    e. removeTail
    f. removeValue
    g. reverse
    h. addTailNode
    i. addHeadNode
    j. removeNode
    k. moveToTail
    l. moveToHead
    m. add forEachBackwards
  3. Add Additional Tests
  4. Understand Linked Lists Like A Boss


  ###########
  Other Stuff
  ###########

  Try to get all methods to run in constant time expecpt for: 
    -contains
    -removeValue
    -forEach
    -reverseList
    -containsNode
    -forEachBackwards
*/


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  size() {
    return this.listLength;
  }

  addToTail(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    
    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.listLength++;
  }
  
  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    if (!this.tail) this.tail = newNode;
    else this.head.previous = newNode;

    this.head = newNode;
    this.listLength++;
  }

  removeHead() {
    if (this.head) {
      this.listLength--;
      let temp = this.head;

      this.head = this.head.next;
      if (this.head) this.head.previous = null;
      else this.tail = null;
      return temp.value;
    }
    return null;
  }

  removeTail() {
    if (this.tail) {
      this.listLength--;
      let temp = this.tail.value;
      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
        return temp;
      }
      this.tail = this.tail.previous;
      if (this.tail) this.tail.next = null;
      return temp;
    }
    return null;
  }

  contains(value) {
    let current = this.head;

    while(current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  removeValue(value) {
    if (this.head) this.listLength--;
    let current = this.head;

    while(current) {
      if (current.value === value) {
        let temp = current.value;
        if (current === this.tail) {
          this.tail = current.previous;
          if (this.tail) this.tail.next = null;
        }
        if (current === this.head) {
          this.head = this.head.next;
          if (this.head) this.head.previous = null;
        }
        if (current.previous) current.previous.next = current.next;
        if (current.next) current.next.previous = current.previous;
        return temp;
      }
      current = current.next;
    }

    return false;
  }

  forEach(callback) {
    let current = this.head;
    while(current) {
      callback(current);
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    while(current) {
      let temp = current.next;
      current.next = current.previous;
      current.previous = temp;
      current = current.next;
    }
  }

  addTailNode(node) {
    if (!this.head) this.head = node;
    else this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.listLength++;
  }

  addHeadNode(node) {
    if (!this.head) this.tail = node;
    else this.head.previous = node;
    node.next = this.head;
    this.head = node;
    this.listLength++;
  }

  containsNode(node) {
    let current = this.head;
    while (current) {
      if (current === node) return true;
      current = current.next;
    }
    return false;
  }

  removeNode(node) {
    if (node.previous) node.previous.next = node.next;
    if (node.next) node.next.previous = node.previous;
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.previous;

    if (this.head) this.listLength--;
  }

  moveToTail(node) {
    this.removeNode(node);
    this.addTailNode(node);
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addHeadNode(node);
  }

  forEachBackwards(callback) {
    let current = this.tail;
    while (current) {
      callback(current);
      current = current.previous;
    }
  }
}

module.exports = {Node, LinkedList};