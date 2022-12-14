const Node = function(element, prev) {
    this.element = element;
    this.prev = prev;
    this.next = null;
};

const DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.head = () => {
        return this.head;
    }

    this.add = (element) => {
        if (!element) {
            return false;
        }

        const newNode = new Node(element, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let nextNode = this.head;
            while (nextNode.next) {
                nextNode = nextNode.next;
            }
            nextNode.next = newNode;
        }
        if (this.tail === null) {
            this.tail = newNode;
        } else {
            let prevNode = this.tail;
            this.tail = newNode;
            this.tail.prev = prevNode;
        }
    };

    this.remove = (element) => {
        let current = this.head;
        if (!this.head && !this.tail) {
            return null;
        }

        if (this.tail.data === element) {
            let prevNode = this.tail.prev;
            this.tail = prevNode;
            this.tail.next = null;
            return;
        }

        while (current.next) {
            if (current.data === element) {
                let removedNode = current;
                let prevNode = current.prev;
                let nextNode = current.next;

                if (this.head.data === removedNode.data) {
                    this.head = nextNode;
                    this.head.prev = null;
                    break;
                }
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }
            current = current.next;
        }
    }
};

const dLink = new DoublyLinkedList();

dLink.add('AAA');
dLink.add('BBB');
dLink.add('CCC');
console.log(dLink);
dLink.remove('BBB');
console.log(dLink);

