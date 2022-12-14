function LinkedList() {
    let head = null;
    let length = 0;
    

    function Node(element) {
        this.element = element;
        this.next = null;
    };

    this.size = () => {
        return length;
    };

    this.head = () => {
        return this.head;
    };

    this.add = (element) => {
        let node = new Node(element);
        if (this.head === null) {
            head = node;
        } else {
            let curentNode = this.head;
            while (curentNode.next) {
                curentNode = curentNode.next;
            }
            curentNode.next = node;
        }
        length++;
    };

    this.removeAt = (index) => {
        if (index < 0 || index >= length) {
            return null;
        }

        let deletedNode = head;
        if (index === 0) {
            head = null;
        } else {
            let currentNode = head;
            let currentIndex = 0;

            while (currentIndex < index - 1) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            deletedNode = currentNode.next;
            currentNode.next = deletedNode.next;
        }
        length--;
        return deletedNode.element;
    };

}    

const link = new LinkedList();

link.add('AAA');
link.add('BBB');
link.add('YYY');

console.log(link.head());
link.removeAt(2);
console.log(link.head());