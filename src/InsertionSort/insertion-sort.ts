class InsertionSort {
    array: number[];
    length: number;
    constructor(array: Array<number>){
        this.array = array;
        this.length = array.length;
    }

    insertion(): number[] {
        for(let i = 1; i < this.length ; i++){
            let key = this.array[i];
            let j = i - 1;
            while(j >= 0 && key < this.array[j]){
                this.array[j + 1] = this.array[j];
                --j;
            }
            this.array[j + 1] = key;
        }
        return this.array;
    }

}


const insertionSort = new InsertionSort([-2, 45, 0, 11, -9]);

console.log(insertionSort.insertion());

const insertionSort2 = new InsertionSort([-9, -2, 0, 11, 45]);

console.log(insertionSort2.insertion());