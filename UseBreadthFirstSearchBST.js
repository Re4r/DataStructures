const displayTree = (tree) => {
    console.log(JSON.stringify(tree,null,2));
}

const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.root = null;

    this.add = (value) => {
        let current = this.root;
        const node = new Node(value);
        let direction = '';

        if (!current) {
            this.root = node;
            return undefined;
        }

        while (current) {
            if (current.value === value) {
                return null;
            }

            direction = (value < current.value) ? 'left' : 'right';

            if (!current[direction]) {
                current[direction] = node;
                return undefined;
            }
            current = current[direction];
        }
    };

    function traverse(direction, root) {
        const queue = [root];
        const results = [];

        function pushIfThere(node, queue) {
            if (node) queue.push(node);
        };

        while (queue.length > 0) {
            const node = queue.shift();
            results.push(node.value);
            if (direction === 'level') {
                pushIfThere(node.right, queue);
                pushIfThere(node.left, queue);
            }
        }
        return results;
    };

    this.levelOrder = () => {
        if (!this.root) return null;
        return traverse('level', this.root);
    };

    this.reverseLevelOrder = () => {
        if (!this.root) return null;
        return traverse('reverseLevel', this.root);
    };
}

const newBin = new BinarySearchTree();
newBin.add(33);
newBin.add(22);
newBin.add(44);
newBin.add(20);
newBin.add(23);
newBin.add(45);
newBin.add(38);
displayTree(newBin);

console.log(newBin.levelOrder());
console.log(newBin.reverseLevelOrder());