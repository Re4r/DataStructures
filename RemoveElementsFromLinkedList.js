function LinkedList() {

    let length = 0;
    let head = null;

    const Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    };

    this.add = function(element) {
        const node = new Node(element);

        if (head === null) {
            head = node;
        } else {
            let current = node;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.remove = function(element) {
        if (head.element === element) {
            head = head.next;

            return length--;
        }

        let previous = head;
        while (previous) {

            let current = previous.next;

            if (current) {
                if (current.element === element) {
                    previous.next = current.next;

                    return length--;
                }
            }
            previous = current;
        }
    };
}