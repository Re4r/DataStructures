const displayTree = (tree) => {
    console.log(JSON.stringify(tree, null, 2));
};

function Node(value) {
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

    this.findMin = () => {
        if (!this.root) return null;
        let curr = this.root;
        while (curr.left) {curr = curr.left};
        return curr.value;
    };

    this.findMax = () => {
        if (!this.root) return null;
        let curr = this.root;
        while (curr.right) {curr = curr.right};
        return curr.value;
    };
}

const binTree = new BinarySearchTree();

binTree.add(79);
binTree.add(15);
binTree.add(80);

displayTree(binTree.findMax());