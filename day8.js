// Day 8 : ES6+ Features

// Task 1
let name1 = 'John';
let age = 30;

console.log(`Hello ${name1}! You are ${age} years old.`);

// Task 2
console.log(`Hello \nWorld`);

// Task 3
const arr = [1,2,3,4,5];
const [a,b,...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// Task 4
const book = {
    name: 'Maths',
    author: 'John Doe',
    year: 2020
}

const {name,author} = book;
console.log(name,author);

// Task 5
arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [...arr1,...arr2];
console.log(arr3);

// Task 6
const add = (...x)=>{
    // return x.reduce((acc,curr)=>acc+curr);

    // let sum = 0;
    // x.forEach(element => {
    //     sum += element;
    // });
    // return sum;

    return x.reduce((acc,curr)=>{
        console.log(acc,curr);    
        return acc+curr
    });
}
console.log(add(1,2,3,4,5));

// Task 7
const multiply = (x,y=1) => x*y;
console.log(multiply(5,10));
console.log(multiply(5));

// Task 8
function Book(name,author,age){
    this.name = name;
    this.author = author;
    this.age = age;
}
const book1 = new Book('Maths','John Doe',2020);
console.log(book1);

// Task 9
function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
  }
  
  function objectify1 (name, age) {
    let obj = {
        name: name,
        age: age
    }
    return obj
  }
console.log(objectify('name', 'Tyler'));
console.log(objectify1('tyler', 18));