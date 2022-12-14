const Node = function(element, prev) {
    this.element = element;
    this.prev = prev;
    this.next = null;
};

const DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.add = (element) => {
        const node = new Node(element, this.tail);
        let currentNode = this.head;
        let previousNode;

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            while (currentNode.next) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.prev = currentNode;
            currentNode.next = node;
            this.tail = node;
        }
    };

    this.reverse = () => {
        let temp = null;
        let currentNode = this.head;

        if (this.head === null) {
            return null;
        }
        this.tail = currentNode;

        while (currentNode) {
            temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.prev;
        }
        if (temp !== null) {
            this.head = temp.prev;
        }
    };
};

const dLink = new DoublyLinkedList();

dLink.add('AAA');
dLink.add('BBB');
dLink.add('CCC');

dLink.reverse();

console.log(dLink);

