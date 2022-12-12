class Set {
    constructor() {
        this.dictionary = {};
    }

    values() {
        return Object.keys(this.dictionary);
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            return true;
        }
        return false;
    }

    isSubsetOf(set) {
        return this.values().every(value => set.values().includes(value));  
    }
}

const one = new Set();
const two = new Set();

one.add('111');
one.add('222');
one.add('333');
two.add('111');
two.add('222');
two.add('333');
two.add('444');

console.log(one);
console.log(two);

console.log(one.isSubsetOf(two));