var InsertionSort = /** @class */ (function () {
    function InsertionSort(array) {
        this.array = array;
        this.length = array.length;
    }
    InsertionSort.prototype.insertion = function () {
        for (var i = 1; i < this.length; i++) {
            var key = this.array[i];
            var j = i - 1;
            while (j >= 0 && key < this.array[j]) {
                this.array[j + 1] = this.array[j];
                --j;
            }
            this.array[j + 1] = key;
        }
        return this.array;
    };
    return InsertionSort;
}());
var insertionSort = new InsertionSort([-2, 45, 0, 11, -9]);
console.log(insertionSort.insertion());
var insertionSort2 = new InsertionSort([-9, -2, 0, 11, 45]);
console.log(insertionSort2.insertion());
