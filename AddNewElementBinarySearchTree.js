const displayTree = (tree) => {
    console.log(JSON.stringify(tree,null,2));
}

const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

const BinarySearchTree = function() {
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
    }
};

const binTree = new BinarySearchTree();

binTree.add(50);
binTree.add(5);
binTree.add(11);
binTree.add(22);
binTree.add(9);
binTree.add(19);
binTree.add(17);
binTree.add(25);

displayTree(binTree);