// let arr = [10,11,12,13,15]

// console.log(arr);

// arr[2] = arr[2]+3
// console.log(arr);

// arr =[]
// console.log(arr);
let arr = [10, 11, 12, 13, 15]

arr.push(99)
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(42)
console.log(arr);
arr.shift(10)
console.log(arr);
console.log(arr.at(0));
console.log(arr.indexOf(10));
console.log(arr.includes(10));

arr.forEach((i) => {
    console.log(i);
})




