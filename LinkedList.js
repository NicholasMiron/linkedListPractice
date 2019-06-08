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
  constructor() {
  }
}


class LinkedList {
  constructor() {
  }
}

module.exports = {Node, LinkedList};