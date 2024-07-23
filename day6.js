// Day 6 : Arrays

// Task 1
const arr = [1,2,3,4,5];
console.log(arr);

// Task 2
console.log(arr[0]);
console.log(arr[arr.length-1]);

// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(1);
console.log(arr);

// Task 7
const arr2 = arr.map(x=>x*2);
console.log(arr2);

// Task 8
const arr3 = arr.filter(x=>x%2==0);
console.log(arr3);

// Task 9
const arr4 = arr.reduce((acc,curr)=>acc+curr);
console.log(arr4);

// Task 10
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Task 11
arr.forEach(x=>console.log(x));

// Task 12
const arr5 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr5);

// Task 13
console.log(arr5[1][1]);