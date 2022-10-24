class SelectionSort {
    array: number[];
    length: number;
    constructor(array: Array<number>){
        this.array = array;
        this.length = array.length;
    }

    selection(): number[] {
        for(let i = 0; i < this.length-1 ; i++){
            let mininum = i;
            for(let j = i+1; j < this.length; j++){
                if (this.array[j] < this.array[mininum]) {
                    mininum = j;
                }
            }
            let temp = this.array[i];
            this.array[i] = this.array[mininum];
            this.array[mininum] = temp;
        }
        return this.array;
    }

}


const selectionSort = new SelectionSort([-2, 45, 0, 11, -9]);

console.log(selectionSort.selection());

const selectionSort2 = new SelectionSort([-9, -2, 0, 11, 45]);

console.log(selectionSort2.selection());