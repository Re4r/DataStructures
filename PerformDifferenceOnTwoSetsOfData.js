class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
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
            this.length++;
            return true;
        }
        return false;
    }

    difference(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            if (!set.values().includes(value)) {
                newSet.add(value);
            }
        })
        return newSet;
    }
}

const testSet = new Set();
const testTwo = new Set();

testSet.add('aaa');
testSet.add('bbb');
testSet.add('ccc');
testSet.add('ddd');
testTwo.add('aaa');
testTwo.add('bbb');
testTwo.add('ccc');

console.log(testSet.values());
console.log(testTwo.values());
console.log(testSet.difference(testTwo));
