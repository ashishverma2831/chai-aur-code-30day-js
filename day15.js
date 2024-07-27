// Day 15 : Closures

// Task 1
function outerFunction(){
    const outerVariable = 'I am outside!';
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const innerFunc = outerFunction();
innerFunc();

// Task 2
function createCounter(){
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    }
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

// Task 3
function createUniqueIdGenerator(){
    let id = 0;
    return function(){
        id++;
        return id;
    }
}
const uniqueId = createUniqueIdGenerator();
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());
console.log(uniqueId());

// Task 4
function captureName(name){
    return {
        greet:function(){
            return `Hello, ${name}`;
        }
    }
}
const person = captureName('Alice');
console.log(person.greet());

// Task 5
function createfunctionArray(){
    const arr = [];
    for(let i=0; i<5; i++){
        arr.push(function(){
            return i;
        });
    }
    return arr;
}
const functionArray = createfunctionArray();
console.log(functionArray[0]());
console.log(functionArray[1]());
console.log(functionArray[2]());
console.log(functionArray[3]());
console.log(functionArray[4]());

// Task 6
function ItemCollection(){
    let items = [];
    return {
        addItems: function(item){
            items.push(item);
        },
        removeItem: function(item){
            items = items.filter(i => i !== item);
        },
        listItems: function(){
            return items;
        }
    }
}
const collection = ItemCollection();
collection.addItems('item1');
collection.addItems('item2');
collection.addItems('item3');
console.log(collection.listItems());
collection.removeItem('item2');
console.log(collection.listItems());

// Task 7
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function slowFunction(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedFunction1 = memoize(slowFunction);
console.log(memoizedFunction1(10000)); // Output: (sum of numbers 0 to 10000)
console.log(memoizedFunction1(10000)); // Output: Retrieved from cache

// Task 8
function memoizeFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
}

const memoizedFactorial1 = memoizeFactorial();
console.log(memoizedFactorial1(5)); // Output: 120
console.log(memoizedFactorial1(6)); // Output: 720
console.log(memoizedFactorial1(5)); // Output: Retrieved from cache
