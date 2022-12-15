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

    this.remove = (value) => {
        if (!this.root) return null;

        let parent;
        let target = this.root;
        while (target && target.value !== value) {
            parent = target;
            if (target.value > target) {
                target = target.left;
            } else {
                target = target.right;
            }
        }
        if (!target) return null;
        const replacement = target.right ? target.right : target.left;
        if (!parent) {
            this.root = replacement;
        } else {
            const direction = parent.left === target ? 'left' : 'right';
            parent[direction] = replacement;
        } 
          
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
newBin.remove(44);
displayTree(newBin);
