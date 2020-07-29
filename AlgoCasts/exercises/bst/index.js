// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    contains(find, node = this){
        if (node.data === find){
            return node
        } else if (find < node.data && node.left){
            return this.contains(find, node.left)
        } else if(find > node.data && node.right){
            return this.contains(find, node.right)
        } else {
            return null;
        }
    }

    //ROBERT SOLUTION
     insert(data, node = this){ //Recursion often used
         if(!node.right && data > node.data){
             return node.right = new Node(data)
         } else if (data > node.data){ //Whenever there is node.right we will traverse 
            this.insert(data, node.right)
        } 
        if (node.left && data < node.data){
             this.insert(data, node.left)
        } else if( data < node.data) {
            return node.left = new Node(data)
        } 
     }

}

module.exports = Node;

