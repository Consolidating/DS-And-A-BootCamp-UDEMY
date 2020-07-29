// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    //ROBERT SOLUTION
    // constructor(){
    // this.MainStack = new Stack();
    // this.PopStack = new Stack();
    // this.firstRecord = ""
    // }

    // add(record){
    //     if (this.PopStack.data.length < 1) {
    //         this.PopStack.push(record)}
    //     else {
    //         this.MainStack.push(record)
    //     }
    // }

    // remove(){
    //     this.firstRecord = this.PopStack.pop()
        
    //     for (let i = this.MainStack.data.length - 1; i >= 0; i --){
    //         this.PopStack.push(this.MainStack.pop())
    //     }

    //     return this.firstRecord
    // }

    // peek(){
    //     return this.PopStack.data[this.PopStack.data.length - 1]
    // }


    constructor(){ //Whenever we create instance, we will generate stacks and assign it to this class 
        this.first = new Stack(); 
        this.second = new Stack();
    }

    add(record){
        this.first.push(record)
    }

    remove(){
        while (this.first.peek()){
            this.second.push(this.first.pop())
        }

        const record = this.second.pop();

        while (this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record;
    }

    peek(){
        while (this.first.peek()){
            this.second.push(this.first.pop())
        }
        const record = this.second.peek()

        while (this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record;
        
    }



}

module.exports = Queue;
