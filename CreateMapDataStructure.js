const Map = function() {
    this.collection = {};

    this.has = (key) => {
        return this.collection.hasOwnProperty(key);
    };

    this.add = (key, value) => {
        this.collection[key] = value;
    };

    this.remove = (key) => {
        if (this.has(key)) {
            delete this.collection[key];
        }
        return this.collection;
    };

    this.get = (key) => {
        if (this.has(key)) {
            return this.collection[key];
        } else {
            return undefined;
        }
    };

    this.values = () => {
        return Object.values(this.collection);
    };

    this.size = () => {
        return Object.entries(this.collection).length;
    };

    this.clear = () => {
        this.collection = {};
        return this.collection;
    };
}

const newItem = new Map();
newItem.add('a', 333);
newItem.add('b', 222);
newItem.add('c', 111);
console.log(newItem.remove('a'));
console.log(newItem.get('b'));
newItem.add('g', 555);
console.log(newItem.values());
console.log(newItem.collection);
console.log(newItem.size());
console.log(newItem.clear());
