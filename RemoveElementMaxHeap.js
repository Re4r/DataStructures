const MaxHeap = function() {
    this.heap = [null];
    
    this.insert = (item) => {
        let index = this.heap.length;
        const arr = [...this.heap];
        arr.push(item);

        while (item > arr[Math.floor(index / 2)] && index > 1) {
            arr[index] = arr[Math.floor(index / 2)];
            arr[Math.floor(index / 2)] = item;
            index = Math.floor(index / 2);
        }
        this.heap = arr;
    };

    this.print = () => this.heap.slice(1);

    this.remove = () => {
        const arr = [...this.heap];
        let max = arr.splice(1, 1);
        this.heap = [null];
        for (let i = 1; i < arr.length; i++) {
            this.insert(arr[i]);
        }
        return max[0];
    };
}

const heap = new MaxHeap();
heap.insert(100);
heap.insert(90);
heap.insert(80);
heap.insert(110);
heap.remove();
console.log(heap.remove());
console.log(heap.print());