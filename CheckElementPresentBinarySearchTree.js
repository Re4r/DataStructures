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

    this.isPresent = (value) => {
        if (!this.root) return false;

        let curr = this.root;
        while (curr && curr.value !== value) {
            if (curr.value > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return !!curr;
    }
}

const binTree = new BinarySearchTree();
displayTree(binTree);
console.log(binTree.isPresent(5));