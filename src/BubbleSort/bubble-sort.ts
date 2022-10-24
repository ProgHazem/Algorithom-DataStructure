class BubbleSort {
    array: number[];
    length: number;
    constructor(array: Array<number>){
        this.array = array;
        this.length = array.length;
    }

    bubble(): number[] {
        for(let i = 0; i < this.length; i++){
            let swapped = false;
            for(let j = 0; j < this.length-i-1; j++){
                if (this.array[j] > this.array[j + 1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    swapped = true;
                }
            }
            if(!swapped)
                break;
        }
        return this.array;
    }

}


const bubbleSort = new BubbleSort([-2, 45, 0, 11, -9]);

console.log(bubbleSort.bubble());

const bubbleSort2 = new BubbleSort([-9, -2, 0, 11, 45]);

console.log(bubbleSort2.bubble());