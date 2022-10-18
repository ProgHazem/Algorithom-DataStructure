class Queue {
    array: number[];
    rare: number;
    front: number;
    size: number;

    constructor(){
        this.array = [];
        this.rare = -1;
        this.front = -1;
        this.size = 5;
    }

    enqueue(value: number){
        if((this.rare !== this.size && this.front !== this.rare) || (this.front !== this.rare)){
            this.array.push(value);
            this.rare ++;
            this.front = 0
        }
    }

    dequeue(){
        if(this.front){

        }
    }

    isEmpty(){
        this.front === this.rare ? true : false;
    }

    isFull(){
        this.front === this.rare ? true : false;
    }


}