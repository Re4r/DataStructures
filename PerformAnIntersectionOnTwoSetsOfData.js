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
    

    intersection(set) {
        const newSet = new Set();
        this.union(['d','e','f','x']).values().forEach(value => {
            if (set.includes(value)) {
                newSet.add(value);
            }
        })
        return newSet;
    }
}

const interSec = new Set();
interSec.add('a');
interSec.add('b');
interSec.add('c');

console.log(interSec.intersection(['a','c','f','d','b','x']));
