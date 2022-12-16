
const MaxHeap = function() {
    this.heap = [];

    this.print = () => [...this.heap];

    const leftChildIndex = (i) => 2 * i;
    const rightChildIndex = (i) => 2 * i + 1;
    const parentIndex = (i) => Math.floor(i / 2);

    this.insert = (item) => {
        this.heap.push(item);
        let index = this.heap.length - 1;
        while (index > 1 && item > this.heap[parentIndex(index)]) {
            this.heap[index] = this.heap[parentIndex(index)];
            this.heap[parentIndex(index)] = item;
            index = parentIndex(index);
        }
    };
}

const heap = new MaxHeap();

heap.insert(50);
heap.insert(40);
heap.insert(30);
heap.insert(54);
heap.insert(123);

console.log(heap.print());




