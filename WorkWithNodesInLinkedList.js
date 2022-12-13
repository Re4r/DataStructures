const Node = function(element) {
    this.element = element;
    this.next = null;
};

const kitten = new Node('Kitten');
const puppy = new Node('Puppy');
const cat = new Node('Cat');
const dog = new Node('Dog');

kitten.next = puppy;
puppy.next = cat;
cat.next = dog;

console.log(kitten);