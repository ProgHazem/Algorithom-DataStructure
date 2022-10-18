var Stack = /** @class */ (function () {
    function Stack() {
        this.array = [];
        this.top = -1;
        this.size = 5;
    }
    Stack.prototype.push = function (value) {
        if (!this.isFull()) {
            this.array.push(value);
            this.top++;
        }
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            this.array.pop();
            this.top--;
        }
        else {
            this.top = -1;
        }
    };
    Stack.prototype.isEmpty = function () {
        return (this.top === -1 && this.array.length === 0) ? true : false;
    };
    Stack.prototype.isFull = function () {
        return (this.top !== -1 && this.array.length === this.size) ? true : false;
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(7);
stack.push(9);
stack.push(11);
stack.pop();
console.log(stack.array);
console.log(stack.isFull());
console.log(stack.isEmpty());
