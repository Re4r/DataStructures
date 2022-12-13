function LinkedList() {
    let length = 0;
    let head = null;

    const Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = () => length;

    this.head = () => head;

    this.add = (element) => {
        const node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.remove = (element) => {
        let currentNode = head;
        let previousNode;

        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.isEmpty = () => {
        return this.size() > 0 ? false : true;
    };

    this.indexOf = (el) => {
        let currentNode = head;
        let index = -1;
        let indexFound = false;

        while (!indexFound && currentNode) {
            index++;
            if (currentNode.element === el) {
                indexFound = true;
            }
            currentNode = currentNode.next;
        }
        return indexFound ? index : -1;
    };

    this.elementAt = (i) => {
        let currentNode = head;
        let currentElement;
        let index = -1;
        let indexReached = false;

        while (!indexReached && currentNode) {
            index++;
            currentElement = currentNode.element;
            if (index === i) {
                indexReached = true;
            }
            currentNode = currentNode.next;
        }
        return indexReached ? currentElement : undefined;
    }
}

const searchLink = new LinkedList();

searchLink.add('one');
searchLink.add('two');
searchLink.add('three');

console.log(searchLink.head());
console.log(searchLink.size());

searchLink.remove('one');

console.log(searchLink.head());
console.log(searchLink.size());

searchLink.add('four');

console.log(searchLink.head());
console.log(searchLink.size());

console.log(searchLink.isEmpty());
console.log(searchLink.indexOf('two'));
console.log(searchLink.elementAt(1));

