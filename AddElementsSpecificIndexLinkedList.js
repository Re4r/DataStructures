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

    this.addAt = (index, element) => {
        let currentIndex = 0;
        let currentNode = head;
        let newNode = new Node();
        newNode.element = element;
        if (index < 0 || index > this.size()) {
          return false;
        }
        while (currentIndex <= index){
          if(index == 0){
            newNode.next = head;
            head = newNode;
            length++;
            break;
          }
          if (currentIndex == index - 1) {
            let nextNode = currentNode.next;
            newNode.next = nextNode;
            currentNode.next = newNode;
            length++;
            break;
          }
          currentNode = currentNode.next
          currentIndex++;
        }
      }; 

} 

const link = new LinkedList();
link.add('AAA');
link.add('BBB');
link.addAt(1, 'CCC');
console.log(link.head());