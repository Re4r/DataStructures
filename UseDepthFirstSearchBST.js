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

    this.inOrder = () => {
        if (!this.root) return null;

        function traverse(node) {
            if (!node) return [];
            const nodes = traverse(node.left);
            nodes.push(node.value);
            nodes.push(...traverse(node.right));
            return nodes;
        }
        return traverse(this.root);
    };

    this.preOrder = () => {
        if (!this.root) return null;

        function traverse(node) {
            if (!node) return [];

            const nodes = [node.value];
            nodes.push(...traverse(node.left));
            nodes.push(...traverse(node.right));
            return nodes;
        }
        return traverse(this.root);
    };

    this.postOrder = () => {
        if (!this.root) return null;

        function traverse(node) {
            if (!node) return [];
            const nodes = traverse(node.left);
            nodes.push(...traverse(node.left));
            nodes.push(...traverse(node.right));
            return nodes;
        }
        return traverse(this.root);
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

console.log(newBin.inOrder());
console.log(newBin.preOrder());
console.log(newBin.postOrder());