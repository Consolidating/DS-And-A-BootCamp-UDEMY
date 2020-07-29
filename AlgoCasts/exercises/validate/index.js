// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// function validate(node, min = node.left, max = node.right) {
//     if (!node){
//         return true;
//     } 

//     if (node.data >= max || node.data <= min) return false;

//         if (validate(node.left,min,node.data)) {
//             return validate(node.right,node.data,max)
//         } else {
//             return validate(node.left,min,node.data)
//         }

// }


function validate(node, min = null, max = null) {
    //Moving to Left
    if (max !== null && node.data > max){
        return false
    }

    if (min !== null && node.data < min){
        return false;
    }

    if (node.left && !validate(node.left,min,node.data)){
        return false; 
    }

    if (node.right && !validate(node.right,node.data, max)){
        return false; 
    }

    return true;

}


module.exports = validate;
