class Stack {
    array: number[];
    top: number;
    size: number;
    constructor(){
        this.array = [];
        this.top = -1;
        this.size = 5;
    }

    push(value: number) {
        if (!this.isFull()){
            this.array.push(value);
            this.top++;
        }
    }

    pop() {
        if (!this.isEmpty()){
            this.array.pop();
            this.top--;
        } else {
            this.top = -1;
        }
    }

    isEmpty() {
        return (this.top === -1 && this.array.length === 0) ? true : false;
    }

    isFull() {
        return (this.top !== -1 && this.array.length === this.size) ? true : false;
    }

}

const stack = new Stack();
console.log(stack.isEmpty())
stack.push(5)
stack.push(7)
stack.push(9)
stack.push(11)
stack.pop()
console.log(stack.array)
console.log(stack.isFull())
console.log(stack.isEmpty())
