class Queue {
    constructor(...item) {
        this.collection = item;
        this.start = 0;
        this.end = 0;
    }

    print() {
        console.log(this.collection);
    }

    enqueue(value) {
        this.collection[this.end++] = value;
    }

    dequeue() {
        return this.collection[this.start++];
    }

    front() {
        return this.collection[this.start];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const newQueue = new Queue(4,6,7,8,9);

newQueue.print();
newQueue.enqueue(9978);
newQueue.enqueue(777);
console.log(newQueue.dequeue());
console.log(newQueue.size());
console.log(newQueue.front());
console.log(newQueue.isEmpty());
newQueue.print();


function Ueu(...item) {
    const coll = item;

    this.printer = function() {
        console.log(coll);
    }
}

const newRt = new Ueu(1,5,6,7,99,444);
newRt.printer();
