class Stack {
    constructor(...item) {
        this.collection = item;
    }

    print() {
        console.log(this.collection);
    }

    push(val) {
        return this.collection.push(val);
    }

    pop() {
        return this.collection.pop();
    }

    peek() {
        return this.collection[this.collection.length - 1];
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    clear() {
        return this.collection.length = 0;
    }
}

const beeArr = new Stack(2,5,7,8,9,0);
beeArr.print();