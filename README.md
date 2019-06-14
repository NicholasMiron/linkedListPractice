# Linked List Practice

## Purpose
This repo is designed to help learn how to make linked lists in javascript.

## Getting Started
Step by step to getting started

Clone the repo
```
git clone https://github.com/NicholasMiron/linkedListPractice.git
```
Install dependenices
```
npm install
```
And that's all!

## Running the tests
There are tests for every a wide range of linked list methods.

To get started follow these steps:
1. To run tests we need to find the describe block for a particular method in the test file.
2. Remove the x before the describe block.
3. Write the method.
4. Run the tests.
```
npm run test
```
5. Fix bugs.


## Recommended order of completion

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
  j. addTailNode
  k. addHeadNode
  l. containsNode
  m. removeNode
  n. moveToTail
  o. moveToHead
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
3. Add additional failing tests for above methods
4. Add new methods and tests
5. Understand Linked Lists Like A Boss

Try to get all methods to run in constant time expecpt for: 
  - contains
  - removeValue
  - forEach
  - reverseList
  - containsNode
  - forEachBackwards
  
Value based methods should only accept values as arguments
Node based methods should only accept nodes as arguments
