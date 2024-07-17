// Day 5 : Functions

// Task 1
function checkEvenOrOdd(x){
    if(x%2==0)
        console.log('Even');
    else
        console.log('Odd');
}
checkEvenOrOdd(5);

// Task 2
function square(x){
    return x*x;
}
console.log(square(5));

// Task 3
function max(x,y){
    if(x>y)
        return x;
    else
        return y;
}
console.log(max(5,10));

// Task 4
function concatenate(str1,str2){
    return str1+" "+str2;
}
console.log(concatenate('Hello','World'));

// Task 5
const add = (x,y) => x+y;
console.log(add(5,10));

// Task 6
const checkCharacter = (str,ch)=>{
    return str.includes(ch);
}
console.log(checkCharacter('Hello','e'));

// Task 7
const product = (x,y=5) => x*y;
console.log(product(5,10));
console.log(product(5));

// Task 8
const greet = (name,age=24)=>{
    return 'Hello '+name+'! You are '+age+' years old.';
}
console.log(greet('John',30));
console.log(greet('John'));

// Task 9
const highrOrderFunction = (func,n) => {
    for(let i=1;i<=n;i++){
        func()
    }
}
console.log(highrOrderFunction(()=>console.log('Hello'),2));

// Task 10
const highrOrderFunction2 = (func1,func2,n) => {
    const a = func1(n);
    return func2(a);
}
console.log(highrOrderFunction2((n)=>n+2,(a)=>a*a,5));