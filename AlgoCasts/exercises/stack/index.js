// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [];
    }

     push(record){
        this.data.push(record)
    }

     pop(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length - 1]
    }


}


// let a = new Stack
// a.push(1)
// a.push(2)

// console.log(a.pop())
// a.pop()

// console.log(a)


module.exports = Stack;
