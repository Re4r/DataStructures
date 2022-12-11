class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.keys(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }
        return false;
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }
        return false;
    }

    size() {
        return this.length;
    }

    union(set) {
        const newSet = new Set();
        this.values().forEach(value => newSet.add(value));
        set.forEach(value => newSet.add(value));

        return newSet;
    }
}

const pool = new Set('a','b','c');

console.log(pool);
console.log(pool.add('aaa'));
console.log(pool.add('bbb'));
console.log(pool);
console.log(pool.remove('aaa'));
console.log(pool);
console.log(pool.has('bbb'));
console.log(pool.add('ccc'));
console.log(pool);
console.log(pool.size());
console.log(pool.values());
console.log(pool);
console.log(pool.union([1, 2, 3]));
console.log(pool);
console.log(pool.union([1, 5, 2, 2, 3]));
console.log(pool);