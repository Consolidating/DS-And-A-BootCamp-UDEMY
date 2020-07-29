let Node = require('./node.js')

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root){
    let Array = [root, 's'];
    let Counters = [0];

    while (Array.length > 1){

        let node = Array.shift();
        
        if (node === 's'){
            Counters.push(0)
            Array.push('s')
        } else {
            Array.push(...node.children)
            Counters[Counters.length - 1] ++
        }
    }

    return Counters
}

module.exports = levelWidth;
