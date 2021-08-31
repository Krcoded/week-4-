class ListNode {
  constructor(val, next = null) {
    this.next = next;
    this.val = val;
  }
}

// linked list => a set of ListNodes

const head = new ListNode(1);
const node1 = new ListNode(2);
const node2 = new ListNode(3);
const node3 = new ListNode(9);

head.next = node1;
node1.next = node2;
node2.next = node3;

const printLinkedList = (headNode) => {
  let current = headNode;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const node4 = new ListNode(5);
node4.next = node3;
node3.next = node4;

printLinkedList(head);
