// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }


    insertLast(data){
    //Robert Solution
    //     let node = this.head
    //     let last;
        
    //     while (node.next){
    //         node = node.next 
    //     } 
    //    last = node 
    //    last.next = new Node(data)

    const last = this.getLast();

    if(last){
        last.next = new Node(data);
    } else {
        this.head = new Node(data)
    }

    }

    size(){
         let counter = 0;
         let node = this.head;
         while (node){
             counter ++;
             node = node.next;
         }
         return counter;
     }

     getFirst(){
         return this.head
     }

    getLast(){
        if (!this.head){
        return null;
        }
        let node = this.head;
         while(node){
             if(!node.next){
                 return node;
             }
             node = node.next;
         }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if (!this.head){
            return; 
        }
        return this.head = this.head.next 
    }


    removeLast(){
        if (!this.head){
            return;
        }     
        if (!this.head.next){
            this.head = null;
            return;
        }
       let previous = this.head 
       let node = this.head.next

        while (node.next){
            previous = node
            node = node.next
        }      
        previous.next = null;
    }

    getAt(index){
        //Linkedlists are zero indexed list arrays 
      
        //Robert Solution
        // let current = this.head;
        // let i = 0;
        // if (current){
        //     while(i < index){
        //         i ++
        //         current = current.next
        //     }
        // }
        // return current 

        if(!this.head){
            return null;}
        
        let counter = 0;
        let node = this.head;

        while(node){
            if (counter === index){
                return node;
            }

            counter ++;
            node = node.next
        }
        return null;

    }


    removeAt(index){
        if(!this.head){
            return;
        }

        if (index === 0){
            this.head = this.head.next 
        }

        const previous = this.getAt(index-1)

        if (!previous || !previous.next){
            return;
        }
    
        previous.next = previous.next.next 

    }

        insertAt(data,index){
            if (!this.head){
                //Edge case, if head is empty, we will create it 
                this.head = new Node(data);
                return;
            }
            if (index === 0){
                this.head = new Node(data, this.head) //Recall second argument for initializing new node is the next 
                return;
            }
            const previous = this.getAt(index - 1) || this.getLast(); //if first returns falsey, go to getLast();
            const node = new Node(data, previous.next); //Pass in previous next as the new to current node 
            previous.next = node;

        }
        
    forEach(func){
        let node = this.head 

        if (!node.next){
            return;
        }  

        while (node){
            func(node);
            node = node.next
        }
    }


    *[Symbol.iterator](){
        let node = this.head;
        while (node){
            yield node;
            node = node.next 
        }
    }


}

module.exports = { Node, LinkedList };


