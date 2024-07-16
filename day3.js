// Day 3 : Control Structures

// Task 1
let num = 10;
if (num > 0) {
    console.log('Positive');
} else if (num == 0) {
    console.log('Zero');
} else {
    console.log('Negative');
}

// Task 2
let age = 12;
if (age >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}

// Task 3
let a = 50;
let b = 5;
let c = 30;
if (a > b && a > c) {
    console.log('A is the greatest');
} else if (b > c && b > a) {
    console.log('B is the greatest');
} else {
    console.log('C is the greatest');
}

// Task 4
let d = 2;
switch (d) {
    case 1: console.log('Sunday');
        break;
    case 2: console.log('Monday');
        break;
    case 3: console.log('Tuesday');
        break;
    case 4: console.log('Wednesday');
        break;
    case 5: console.log('Thursday');
        break;
    case 6: console.log('Friday');
        break;
    case 7: console.log('Saturday');
        break;
    default: console.log('Invalid day');
        break;
}

// Task 5
let score = 80;
switch(score){
    case 90: console.log('A');
    break;
    case 80: console.log('B');
    break;
    case 70: console.log('C');
    break;
    case 60: console.log('D');
    break;
    default: console.log('F');
    break;
}

// Task 6
let e = 10;
console.log(e%2==0?'Even':'Odd');

// Task 7
let year = 2020;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log('Leap Year');
}
else{
    console.log('Not a Leap Year');
}

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log('Leap Year');
//         }
//         else{
//             console.log('Not a Leap Year');
//         }
//     }
//     else{
//         console.log('Leap Year');
//     }
// }
// else{   
//     console.log('Not a Leap Year');
// }
