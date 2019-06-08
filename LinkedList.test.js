const {Node, LinkedList} = require('./LinkedList');

let linkedList, nodeA;

beforeEach(() => {
  linkedList = new LinkedList;
  nodeA = new Node('A');
})


describe('Node', () => {
  it('Should have a value property', () => {
    expect(nodeA).toHaveProperty('value');
  });

  it('Should have a next property', () => {
    expect(nodeA).toHaveProperty('next');
  });
});


describe('LinkedList', () => {
  describe('Properties', () => {
    it('Should have a head property', () => {
      expect(linkedList).toHaveProperty('head');
    });

    it('Should have a tail property', () => {
      expect(linkedList).toHaveProperty('tail');
    });
  });


  describe('Methods', () => {
    describe('size', () => {
      it('Should have a property size', () => {
        expect(linkedList).toHaveProperty('size');
        expect(typeof linkedList.size).toBe('function');
      });

      it('Should return size 0 for an empty list', () => {
        expect(linkedList.size()).toBe(0);
      });

      it('Should return the correct size of the list', () => {
        const node1 = new Node(3);
        const node2 = new Node(4);

        linkedList.addToHead(1);
        linkedList.addToTail(2);
        linkedList.addHeadNode(node1);
        linkedList.addTailNode(node2);

        expect(linkedList.size()).toBe(4);
      });

      it('Should return correct size of the list', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);

        linkedList.addHeadNode(node1);
        linkedList.addTailNode(node3);
        linkedList.addHeadNode(node2);
        linkedList.removeNode(node1);
        linkedList.addTailNode(node4);
        linkedList.addToHead(5);
        linkedList.addToTail(6);
        linkedList.removeTail();
        linkedList.removeHead();

        expect(linkedList.size()).toBe(3);
      });

      it('Should not go below zero', () => {
        linkedList.removeHead();
        linkedList.removeHead();

        expect(linkedList.size()).toBe(0);
      });
    });


    describe('addToTail', () => {
      it('Should have a property addToTail', () => {
        expect(linkedList).toHaveProperty('addToTail');
        expect(typeof linkedList.addToTail).toBe('function');
        expect(linkedList.addToTail.length).toBe(1);
      });

      it('Should set tail to a Node object', () => {
        linkedList.addToTail('Blueberry');

        expect(linkedList.tail).toBeInstanceOf(Node);
      });

      it('Should correctly set tail when values are added', () => {
        linkedList.addToTail('Dank');
        linkedList.addToTail('Banana');
        linkedList.addToTail('Waffle');

        expect(linkedList.tail.value).toBe('Waffle');
      });

      it('Should correctly set head when the list is empty and value is added.', () => {
        linkedList.addToTail('Cupcake');
        expect(linkedList.head).toEqual(linkedList.tail);
      });
    });


    describe('addToHead', () => {
      it('Should have a property addToHead', () => {
        expect(linkedList).toHaveProperty('addToHead');
        expect(typeof linkedList.addToHead).toBe('function');
        expect(linkedList.addToHead.length).toBe(1);
      });
      
      it('Should set tail to a Node object', () => {
        linkedList.addToHead('Blueberry');
        expect(linkedList.head).toBeInstanceOf(Node);
      });
      
      it('Should correctly set head when values are added', () => {
        linkedList.addToHead('Dank');
        linkedList.addToHead('Banana');
        linkedList.addToHead('Waffle');

        expect(linkedList.head.value).toBe('Waffle');
      });
      
      it('Should correctly set tail when the list is empty and value is added.', () => {
        linkedList.addToTail('Cupcake');

        expect(linkedList.head).toEqual(linkedList.tail);
      });
    });

    
    describe('removeHead', () => {
      it('Should have a method removeHead', () => {
        expect(linkedList).toHaveProperty('removeHead');
        expect(typeof linkedList.removeHead).toBe('function');
      });

      it('Should remove the current head', () => {
        linkedList.addToHead('Freddie');

        linkedList.removeHead();

        expect(linkedList.head).toBe(null);
      });

      it('Should set head to next value', () => {
        linkedList.addToHead('Freddie');
        linkedList.addToHead('Mercury');
        
        linkedList.removeHead();

        expect(linkedList.head.value).toBe('Freddie');
      });

      it('Should return the removed value', () => {
        linkedList.addToHead('Freddie');
        
        const removed = linkedList.removeHead();
        
        expect(removed).toBe('Freddie');
      });

      it('Should return null when called on empty list', () => {
        const removed = linkedList.removeHead();
        
        expect(removed).toBe(null);
      });

      it('Should reset tail when called on a list with one node', () => {
        linkedList.addToHead('Baseball');
        
        linkedList.removeHead();
        
        expect(linkedList.head).toBe(linkedList.tail);
      });
    });


    describe('removeTail', () => {
      it('Should have a method removeTail', () => {
        expect(linkedList).toHaveProperty('removeTail');
        expect(typeof linkedList.removeTail).toBe('function');
      });

      it('Should remove the current tail', () => {
        linkedList.addToTail('Freddie');
        
        linkedList.removeTail();
        
        expect(linkedList.tail).toBe(null);
      });

      it('Should set tail to previous value', () => {
        linkedList.addToTail('Freddie');
        linkedList.addToTail('Mercury');
        
        linkedList.removeTail();
        
        expect(linkedList.tail.value).toBe('Freddie');
      });

      it('Should return the removed value of list length one', () => {
        linkedList.addToTail('Freddie');
        
        const removed = linkedList.removeTail();
        
        expect(removed).toBe('Freddie');
      });

      it('Should return the removed value of list length > one', () => {
        linkedList.addToTail('Freddie');
        linkedList.addToTail('Mercury');
        
        const removed = linkedList.removeTail();
        
        expect(removed).toBe('Mercury');
      });

      it('Should return null when called on empty list', () => {
        const removed = linkedList.removeTail();
        
        expect(removed).toBe(null);
      });

      it('Should reset head when called on a list with one node', () => {
        linkedList.addToTail('Baseball');
        
        expect(linkedList.head).toBe(linkedList.tail);
      });
    });


    describe('contains', () => {
      it('Should have a method contains', () => {
        expect(linkedList).toHaveProperty('contains');
        expect(typeof linkedList.contains).toBe('function');
        expect(linkedList.contains.length).toBe(1);
      });

      it('Should return true if a list of length one contains a value', () => {
        linkedList.addToTail(1);
        
        expect(linkedList.contains(1)).toBe(true);
      });

      it('Should return true if a list contains a value', () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);
        linkedList.addToHead(3);
        linkedList.addToHead(4);
        
        expect(linkedList.contains(1)).toBe(true);
        expect(linkedList.contains(2)).toBe(true);
        expect(linkedList.contains(3)).toBe(true);
        expect(linkedList.contains(4)).toBe(true);
      });

      it('Should return false if a list doesn\'t contain a vlaue', () => {
        expect(linkedList.contains(1)).toBe(false);
        linkedList.addToHead(1);
        
        expect(linkedList.contains(2)).toBe(false);
        linkedList.addToHead(2);
        
        expect(linkedList.contains(3)).toBe(false);
      });
    });


    describe('removeValue', () => {
      it('Should have a method removeValue', () => {
        expect(linkedList).toHaveProperty('removeValue');
        expect(typeof linkedList.removeValue).toBe('function');
        expect(linkedList.removeValue.length).toBe(1);
      });

      it('Should return false if the list doesn\'t contain a value', () => {
        expect(linkedList.removeValue(1)).toBe(false);
      });

      it('Should return the removed value', () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);
        linkedList.addToHead(3);
        
        const removed = linkedList.removeValue(2);
        
        expect(removed).toBe(2);
      });

      it('Should remove a value from the list', () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);
        linkedList.addToHead(3);
        
        linkedList.removeValue(2);

        expect(linkedList.contains(2)).toBe(false);
      });

      it('Should reset tail if it removes last value', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);
        
        linkedList.removeValue(3);
        
        expect(linkedList.tail.value).toBe(2);
      });

      it('Should reset head if it removes first value', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);
        
        linkedList.removeValue(1);
        
        expect(linkedList.head.value).toBe(2);
      });

      it('Should handle lists with one item', () => {
        linkedList.addToHead(1);
        
        const removed = linkedList.removeValue(1);
        
        expect(removed).toBe(1);
      });
    });


    describe('forEach', () => {
      it('Should have a method forEach', () => {
        expect(linkedList).toHaveProperty('forEach');
        expect(typeof linkedList.forEach).toBe('function');
        expect(linkedList.forEach.length).toBe(1);
      });

      it('Should iterate over every node in the list', () => {
        for (let i = 1; i <= 10; i++) {
          linkedList.addToTail(i);
        }

        let result = [];
        const testForEach = (node) => {
          result.push(node.value);
        }
        
        linkedList.forEach(testForEach);

        expect(result.length).toBe(10);
      });

      it('Should call the callback on every node in the list in order', () => {
        for (let i = 0; i <= 10; i++) {
          linkedList.addToTail(i);
        }

        let result = [];
        const testForEach = (node) => {
          result.push(node.value * 2);
        }
        
        linkedList.forEach(testForEach);

        expect(result.length).toBe(11);
        for (let i = 0; i < result.length; i++) {
          expect(result[i]).toBe(i * 2);
        }
      });

      it('Should do nothing on an empty list', () => {
        let result = [];
        const testForEach = (node) => {
          result.push(node.value * 2);
        }
        
        linkedList.forEach(testForEach);

        expect(result.length).toBe(0);
      });
    });


    describe('reverse', () => {
      it('Should have a method reverse', () => {
        expect(linkedList).toHaveProperty('reverse');
        expect(typeof linkedList.reverse).toBe('function');
      });

      it('Should reverse a list', () => {
        for (let i = 0; i < 100; i++) {
          linkedList.addToTail(i);
        }

        linkedList.reverse();

        const result = [];
        const testReverse = (node) => {
          result.push(node.value);
        }

        for (let i = 0; i < result.length; i++) {
          expect(result[i]).toBe(99 - i);
        }
      });

      it('Should reverse a list of length one', () => {
        linkedList.addToHead(1);

        linkedList.reverse();
        
        expect(linkedList.size()).toBe(1);
        expect(linkedList.head).toBe(linkedList.tail)
        expect(linkedList.head.next).toBe(linkedList.head.previous);
      });

      it('Should reverse a list of length two', () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);

        linkedList.reverse();

        expect(linkedList.head.value).toBe(2);
        expect(linkedList.tail.value).toBe(1);
      })
    });


    describe('addTailNode', () => {
      it('Should have a method addTailNode', () => {
        expect(linkedList).toHaveProperty('addTailNode');
        expect(typeof linkedList.addTailNode).toBe('function');
        expect(linkedList.addTailNode.length).toBe(1);
      });

      it('Should add node to tail', () => {
        const node = new Node(1);

        linkedList.addTailNode(node);

        expect(linkedList.tail).toBe(node);
      });

      it('Should correctly set tail when nodes are added', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);

        linkedList.addTailNode(node1);
        linkedList.addTailNode(node2);
        linkedList.addTailNode(node3);

        expect(linkedList.tail).toBe(node3);
      });

      it('Should correctly set head when the list is empty and node is added', () => {
        const node = new Node(1);

        linkedList.addTailNode(node);

        expect(linkedList.head).toBe(node);
        expect(linkedList.tail).toBe(node);
      });
    });


    describe('addHeadNode', () => {
      it('Should have a method addHeadNode', () => {
        expect(linkedList).toHaveProperty('addHeadNode');
        expect(typeof linkedList.addHeadNode).toBe('function');
        expect(linkedList.addHeadNode.length).toBe(1);
      });

      it('Should add node to head', () => {
        const node = new Node(1);

        linkedList.addHeadNode(node);

        expect(linkedList.head).toBe(node);
      });

      it('Should correctly set head when nodes are added', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);

        linkedList.addHeadNode(node1);
        linkedList.addHeadNode(node2);
        linkedList.addHeadNode(node3);

        expect(linkedList.head).toBe(node3);
      });

      it('Should correctly set tail when the list is empty and a node is added', () => {
        const node = new Node(1);

        linkedList.addHeadNode(node);

        expect(linkedList.head).toBe(node);
        expect(linkedList.tail).toBe(node);
      });
    });


    describe('containsNode', () => {
      it('Should have a method containsNode', () => {
        expect(linkedList).toHaveProperty('containsNode');
        expect(typeof linkedList.containsNode).toBe('function');
        expect(linkedList.containsNode.length).toBe(1);
      });

      it('Should return false if the list doesn\'t contain a node', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        
        expect(linkedList.containsNode(node1)).toBe(false);
        linkedList.addTailNode(node1);
        expect(linkedList.containsNode(node1)).toBe(true);
        
        expect(linkedList.containsNode(node2)).toBe(false);
        linkedList.addTailNode(node2);

        expect(linkedList.containsNode(node3)).toBe(false);
      });

      it('Should return true if the list contains a node', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        const node1 = linkedList.head;
        const node2 = linkedList.head.next;
        const node3 = linkedList.head.next.next;

        expect(linkedList.containsNode(node1)).toBe(true);
        expect(linkedList.containsNode(node2)).toBe(true);
        expect(linkedList.containsNode(node3)).toBe(true);
      });


    });


    describe('removeNode', () => {
      it('Should have a method removeNode', () => {
        expect(linkedList).toHaveProperty('removeNode');
        expect(typeof linkedList.removeNode).toBe('function');
        expect(linkedList.removeNode.length).toBe(1);
      });

      it('Should remove a node from the list', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);
        const node5 = new Node(5);

        linkedList.addHeadNode(node1);
        linkedList.addHeadNode(node2);
        linkedList.addHeadNode(node3);
        linkedList.addHeadNode(node4);
        linkedList.addHeadNode(node5);

        expect(linkedList.containsNode(node3)).toBe(true);

        linkedList.removeNode(node3);

        expect(linkedList.containsNode(node3)).toBe(false);
      });

      it('Should set head if first node is removed', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);

        linkedList.addTailNode(node1);
        linkedList.addTailNode(node2);
        linkedList.addTailNode(node3);

        linkedList.removeNode(node1);

        expect(linkedList.head).toBe(node2);
        expect(linkedList.containsNode(node1)).toBe(false);
      });

      it('Should set tail if last node is removed', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);

        linkedList.addTailNode(node1);
        linkedList.addTailNode(node2);
        linkedList.addTailNode(node3);

        linkedList.removeNode(node3);

        expect(linkedList.tail).toBe(node2);
        expect(linkedList.containsNode(node3)).toBe(false);
      });
    });


    describe('moveToTail', () => {
      it('Should have a method moveToTail', () => {
        expect(linkedList).toHaveProperty('moveToTail');
        expect(typeof linkedList.moveToTail).toBe('function');
        expect(linkedList.moveToTail.length).toBe(1);
      });

      it('Should move the passed in node to the tail', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        const oldTail = linkedList.tail;
        const nodeToMove = linkedList.head.next;

        linkedList.moveToTail(nodeToMove);

        expect(linkedList.tail).toBe(nodeToMove);
        expect(oldTail.next).toBe(nodeToMove);
      });

      it('Should handle lists with one node', () => {
        linkedList.addToTail(1);
        
        const nodeToMove = linkedList.head;

        linkedList.moveToTail(nodeToMove);

        expect(linkedList.head).toBe(nodeToMove);
        expect(linkedList.tail).toBe(nodeToMove);
      });

      it('Should reassign head if head is node to be moved', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        const nodeToMove = linkedList.head;
        const newHead = linkedList.head.next;
        
        linkedList.moveToTail(nodeToMove);

        expect(linkedList.head).toBe(newHead);
      });
    });


    describe('moveToHead', () => {
      it('Should have a method moveToHead', () => {
        expect(linkedList).toHaveProperty('moveToHead');
        expect(typeof linkedList.moveToHead).toBe('function');
        expect(linkedList.moveToHead.length).toBe(1);
      });

      it('Should move the passed in node to the head', () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        const oldHead = linkedList.head;
        const nodeToMove = linkedList.head.next;

        linkedList.moveToHead(nodeToMove);

        expect(linkedList.head).toBe(nodeToMove);
        expect(nodeToMove.next).toBe(oldHead);
      });

      it('Should handle lists with one node', () => {
        linkedList.addToHead(1);

        const nodeToMove = linkedList.head;

        linkedList.moveToHead(nodeToMove);

        expect(linkedList.head).toBe(nodeToMove);
        expect(linkedList.tail).toBe(nodeToMove);
      });

      it('Should reassign tail if tail is node to be moved', () => {
        linkedList.addToHead(3);
        linkedList.addToHead(2);
        linkedList.addToHead(1);

        const nodeToMove = linkedList.tail;
        const newTail = linkedList.head.next;

        linkedList.moveToHead(nodeToMove);

        expect(linkedList.head).toBe(nodeToMove);
        expect(linkedList.tail).toBe(newTail);
      });
    });
  });


  describe('Behavior', () => {
    it('Should be able to alternate adding methods', () => {
      const dank = new Node('dank');
      const banana = new Node('banana');
      const waffle = new Node('waffle');
      const camel = new Node('camel');

      linkedList.addToHead(1);
      linkedList.addHeadNode(dank);
      linkedList.addToTail(2);
      linkedList.addTailNode(banana);
      linkedList.addToHead(3);
      linkedList.addToTail(4);
      linkedList.addToHead(5);
      linkedList.addTailNode(waffle);
      linkedList.addToTail(6);
      linkedList.addHeadNode(camel);

      const result = [];
      const testBehavior = (node) => {
        result.push(node.value);
      }
      linkedList.forEach(testBehavior);

      const expected = ['camel', 5, 3, 'dank', 1, 2, 'banana', 4, 'waffle', 6];

      expect(result.length).toBe(10);
      for (let i = 0; i < expected.length; i++) {
        expect(result[i]).toBe(expected[i]);
      }
    });

    it('Should be able to alternate adding and removing values', () => {
      const dank = new Node('dank');
      const banana = new Node('banana');
      const waffle = new Node('waffle');
      const camel = new Node('camel');

      linkedList.addToHead(1);
      linkedList.addHeadNode(dank);
      linkedList.removeTail();
      linkedList.addToTail(2);
      linkedList.addTailNode(banana);
      linkedList.removeHead();
      linkedList.addToHead(3);
      linkedList.removeValue(2);
      linkedList.addToTail(4);
      linkedList.addToHead(5);
      linkedList.addTailNode(waffle);
      linkedList.removeNode(waffle);
      linkedList.removeValue('banana');
      linkedList.addToTail(6);
      linkedList.addHeadNode(camel);

      const result = [];
      const testBehavior = (node) => {
        result.push(node.value);
      }
      linkedList.forEach(testBehavior);

      const expected = ['camel', 5, 3, 4, 6];

      expect(result.length).toBe(5);
      for (let i = 0; i < expected.length; i++) {
        expect(result[i]).toBe(expected[i]);
      }
    });
  });
});


describe('Doubly Linked List', () => {
  describe('Node', () => {
    it('Should have a previous property', () => {
      expect(nodeA).toHaveProperty('previous');
    });
  });


  describe('Methods', () => {
    describe('forEachBackwards', () => {
      it('Should have a method forEachBackwards', () => {
        expect(linkedList).toHaveProperty('forEachBackwards');
        expect(typeof linkedList.forEachBackwards).toBe('function');
        expect(linkedList.forEachBackwards.length).toBe(1);
      });

      it('Should iterate over every node in the list', () => {
        for (let i = 0; i < 10; i++) {
          linkedList.addToTail(i);
        }

        const result = [];
        const testForEachBackwards = (node) => {
          result.push(node);
        }
        linkedList.forEachBackwards(testForEachBackwards);

        expect(result.length).toBe(10);
      });

      it('Should call the callback on every node in the list in reverse order', () => {
        for (let i = 0; i < 10; i++) {
          linkedList.addToTail(i);
        }

        const result = [];
        const testForEachBackwards = (node) => {
          result.push(node.value);
        }
        linkedList.forEachBackwards(testForEachBackwards);

        for (let i = 0; i < 10; i++) {
          expect(result[i]).toBe(9 - i);
        }
      });

      it('Should do nothing on an empty list', () => {
        const result = [];
        const testForEachBackwards = (node) => {
          result.push(node);
        }
        linkedList.forEachBackwards(testForEachBackwards);

        expect(result.length).toBe(0);
      });
    });

  });

  
  describe('Behavior', () => {
    it('Should set previous and next value of nodes', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);
      const node5 = new Node(5);

      linkedList.addTailNode(node1);
      linkedList.addTailNode(node2); 
      linkedList.addTailNode(node3); 
      linkedList.addTailNode(node4); 
      linkedList.addTailNode(node5); 

      expect(node2.previous).toBe(node1);
      expect(node2.next).toBe(node3);
      expect(node3.previous).toBe(node2);
      expect(node3.next).toBe(node4);
      expect(node4.previous).toBe(node3);
      expect(node4.next).toBe(node5);
      expect(node5.previous).toBe(node4);
      expect(node5.next).toBe(null);
    });

    it('Should handle removing head of last item in the list', () => {
      linkedList.addToHead(1);

      expect(linkedList.head.previous).toBe(null);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next).toBe(null);

      linkedList.removeHead();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    it('Should handle removing tail of last item in the list', () => {
      linkedList.addToTail(1);

      expect(linkedList.head.previous).toBe(null);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next).toBe(null);

      linkedList.removeTail();

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });

    it('Should remove nodes from the list', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);
      const node5 = new Node(5);

      linkedList.addHeadNode(node1);
      linkedList.addHeadNode(node2); 
      linkedList.addHeadNode(node3); 
      linkedList.addHeadNode(node4); 
      linkedList.addHeadNode(node5); 

      linkedList.removeNode(node2);
      linkedList.removeNode(node4);

      expect(linkedList.containsNode(node1)).toBe(true);
      expect(linkedList.containsNode(node2)).toBe(false);
      expect(linkedList.containsNode(node3)).toBe(true);
      expect(linkedList.containsNode(node4)).toBe(false);
      expect(linkedList.containsNode(node5)).toBe(true);
      expect(linkedList.size()).toBe(3);
      expect(linkedList.contains(2)).toBe(false);
      expect(linkedList.contains(1)).toBe(true);
    });

    it('Should set tail when node is removed', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.addHeadNode(node1);
      linkedList.addHeadNode(node2); 
      linkedList.addHeadNode(node3); 
      
      linkedList.removeTail();

      expect(linkedList.tail).toBe(node2);
      expect(linkedList.tail.previous).toBe(node3);
      expect(linkedList.tail.next).toBe(null);
      expect(linkedList.containsNode(node1)).toBe(false);
    });

    it('Should set head when node is removed', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);

      linkedList.addHeadNode(node1);
      linkedList.addHeadNode(node2);
      linkedList.addHeadNode(node3);

      linkedList.removeHead();

      expect(linkedList.head).toBe(node2);
      expect(linkedList.head.next).toBe(node1);
      expect(linkedList.head.previous).toBe(null);
      expect(linkedList.containsNode(node3)).toBe(false);
    });
  });
});