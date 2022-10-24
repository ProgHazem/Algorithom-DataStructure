var BubbleSort = /** @class */ (function () {
    function BubbleSort(array) {
        this.array = array;
        this.length = array.length;
    }
    BubbleSort.prototype.bubble = function () {
        for (var i = 0; i < this.length; i++) {
            var swapped = false;
            for (var j = 0; j < this.length - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    var temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped)
                break;
        }
        return this.array;
    };
    return BubbleSort;
}());
var bubbleSort = new BubbleSort([-2, 45, 0, 11, -9]);
console.log(bubbleSort.bubble());
var bubbleSort2 = new BubbleSort([-9, -2, 0, 11, 45]);
console.log(bubbleSort2.bubble());
