let called = 0;

const hash = (string) => {
    called++;
    let hashed = 0;
    for (let i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};

const HashTable = function() {
    this.collection = {};

    this.add = (key, value) => {
        const hashedKey = hash(key);
        this.collection[hashedKey] = this.collection[hashedKey] || {};
        this.collection[hashedKey][key] = value;
    }

    this.lookup = (key) => {
        const hashedKey = hash(key);
        return this.collection[hashedKey][key];
    }

    this.remove = (key) => {
        const hashedKey = hash(key);
        delete this.collection[hashedKey][key];
        if (Object.keys(this.collection[hashedKey]).length == 0) {
            delete this.collection[hashedKey];
        }
    }
}

const newHash = new HashTable();

newHash.add('aaa', 111);
newHash.add('kkk', 222);
newHash.add('ggg', 333);
newHash.add('aya', 111);
console.log(newHash.collection);
console.log(newHash.lookup('ggg'));
console.log(newHash.remove('aya'));
console.log(newHash.collection);
