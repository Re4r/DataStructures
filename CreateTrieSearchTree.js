const displayTree = (tree) => {
    console.log(JSON.stringify(tree, null, 2));
};

const Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => this.end = true;
    this.isEnd = () => this.end;
};

const Trie = function() {
    this.root = new Node;

    this.add = (wordParam) => {
        console.log(wordParam);
        const addWord = (word, root) => {
            if (word) {
                if (Object.keys(root.keys).includes(word[0])) {
                    let letter = word[0];
                    addWord(word.substring(1), root.keys[letter]);
                } else {
                    const node = new Node();
                    let letter = word[0];
                    root.keys[letter] = node;

                    if (word.length === 1) {
                        node.setEnd();
                    }
                    addWord(word.substring(1), root.keys[letter]);
                }
            }
        }
        addWord(wordParam, this.root);
    };

    this.isWord = (word) => {
        let root = this.root;
        while (word) {
            let firstLetter = word[0];
            if (Object.keys(root.keys).includes(firstLetter)) {
                if (word.length === 1) {
                    if (!root.keys[firstLetter].isEnd()) {
                        return false;
                    }
                }
                word = word.substring(1);
            } else {
                return false;
            }
            root = root.keys[firstLetter];
        }
        return true;
    };

    this.print = () => {
        const words = [];
        const reTRIEve = (root, word) => {
            if (Object.keys(root.keys).length != 0) {
                for (let letter of Object.keys(root.keys)) {
                    reTRIEve(root.keys[letter], word.concat(letter));
                }
                if (root.isEnd()) {
                    words.push(word);
                }
            } else {
                word.length > 0 ? words.push(word) : undefined;
                return;
            }
        }
        reTRIEve(this.root, '');
        console.log(words);
        return words;
    };
}

const newTrie = new Trie();

newTrie.add('code');
newTrie.add('boolean');
newTrie.add('wind');
newTrie.print();
console.log(newTrie.isWord('wind'));
displayTree(newTrie);

