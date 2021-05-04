class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(currentNode.value <= value){
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }else{
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }
    lookup(value){
        if(!this.root){
            return "The tree is empty!";
        }
        let currentNode = this.root;
        if(currentNode.value === value){
            return this.root;
        }

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            if(currentNode.value < value){
                //go right
                currentNode = currentNode.right;
            }else if(currentNode.value > value){
                //go left
                currentNode = currentNode.left;
            }
        }
        return -1;
    }
    // remove
  }
  
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
console.log(tree.lookup(37));
  //     9
  //  4     20
  //1  6  15  170
  
function traverse(node) {
const tree = { value: node.value };
tree.left = node.left === null ? null : traverse(node.left);
tree.right = node.right === null ? null : traverse(node.right);
return tree;
}