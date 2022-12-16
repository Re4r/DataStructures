const isSorted = (item) => {
    for (let i = 0; i < item.length - 1; i++) {
        if (item[i] > item[i + 1]) {
            return false;
        }
    }
    return true;
};

const createRandomArray = (size = 5) => {
    let arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
};

const array = createRandomArray();

const MinHeap = function() {
    this.heap = [null];

    this.insert = (element) => {
        this.heap.push(element);
        let heap = this.heap;

        const maxHeap = (index) => {
            let parent = Math.floor(index / 2);
            if (element < heap[parent] && index > 1) {
                [heap[index], heap[parent] = [heap[parent], heap[index]]];
                maxHeap(parent);
            }
        }
        maxHeap(this.heap.length - 1);
    };

    this.remove = () => {
        const arr = [...this.heap];
        let max = arr.splice(1, 1);
        this.heap = [null];
        for (let i = 1; i < arr.length; i++) {
            this.insert(arr[i]);
        }
        return max[0];
    };

    this.sort = (heap = this.heap) => {
        const arr = [];
        for (let i = 0; i < heap.length; i++) {
            arr.push(this.remove());
        }
        return arr;
    };

    this.print = () => console.log(this.heap.slice(1));
}

const heap = new MinHeap();

console.log(createRandomArray());
console.log(isSorted(array));

heap.insert(array);
heap.print();





