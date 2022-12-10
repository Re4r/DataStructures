class Set {
    constructor(item) {
        this.dictionary = item;
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.values(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = element;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        } else {
            return false;
        }
    }

    size() {
        return this.length;
    }
}

const newSet = new Set([1,2,2,2,5,7,9,0,7,6,55,1,4,7]);
console.log(newSet);
