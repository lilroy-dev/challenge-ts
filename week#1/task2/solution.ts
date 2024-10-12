type Items = number[];

function sumArray(arr:Items):number {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers:Items = [10, 20, 30, 40];
sumArray(numbers);