var SelectionSort = /** @class */ (function () {
    function SelectionSort(array) {
        this.array = array;
        this.length = array.length;
    }
    SelectionSort.prototype.selection = function () {
        for (var i = 0; i < this.length - 1; i++) {
            var mininum = i;
            for (var j = i + 1; j < this.length; j++) {
                if (this.array[j] < this.array[mininum]) {
                    mininum = j;
                }
            }
            var temp = this.array[i];
            this.array[i] = this.array[mininum];
            this.array[mininum] = temp;
        }
        return this.array;
    };
    return SelectionSort;
}());
var selectionSort = new SelectionSort([-2, 45, 0, 11, -9]);
console.log(selectionSort.selection());
var selectionSort2 = new SelectionSort([-9, -2, 0, 11, 45]);
console.log(selectionSort2.selection());
