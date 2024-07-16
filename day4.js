// Day 4 : Loops

// Task 1
for(let i = 1; i<=10; i++){
    console.log(i);
}

// Task 2
for(let i=1;i<=10;i++){
    console.log('5 * '+i+' = '+5*i);
}

// Task 3
let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// Task 4
let j=10;
while(j>=1){
    console.log(j);
    j--;
}

// Task 5
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

// Task 6
let fact = 5;
let res = 1;
do{
    if(fact==0 || fact==1)
        break;
    res = res*fact;
    fact--;
}while(fact>1);
console.log(res);

// Task 7
let num = 5;
for(let i=1;i<=num;i++){
    str = '*';
    console.log(str.repeat(i));
}

// Task 8
for(let i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}

// Task 9
for(let i=1;i<=10;i++){
    if(i==7)
        break;
    console.log(i);
}