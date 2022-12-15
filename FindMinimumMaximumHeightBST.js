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

    this.findMinHeight = () => {
        if (!this.root) return -1;

        function findNodeMinHeight(node) {
            if (!node) return 0;
            return 1 + Math.min(findNodeMinHeight(node.left), findNodeMinHeight(node.right));
        }
        return findNodeMinHeight(this.root) - 1;
    };

    this.findMaxHeight = () => {
        if (!this.root) return -1;

        function findNodeMaxHeight(node) {
            if (!node) return 0;
            return 1 + Math.max(findNodeMaxHeight(node.left), findNodeMaxHeight(node.right));
        }
        return findNodeMaxHeight(this.root) - 1;
    };

    this.isBalanced = () => {
        return this.findMinHeight() === this.findMaxHeight();
    };
}

const binTree = new BinarySearchTree();
binTree.add(22);
binTree.add(10);
binTree.add(25);
binTree.add(27);
binTree.add(9);
binTree.add(11);
binTree.add(23);
displayTree(binTree);

console.log(binTree.findMinHeight());
console.log(binTree.findMaxHeight());
console.log(binTree.isBalanced());
