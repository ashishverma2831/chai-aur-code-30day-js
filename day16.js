// Day 16 : Recursion

// Task 1
function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(6));

// Task 2
function fibonacci(num){
    if(num===1){
        return 0;
    }
    if(num===2){
        return 1;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

// Task 3
function sumOfArray(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

// Task 4
function maximumArray(arr){
    if(arr.length === 1){
        return arr[0];
    }
    return Math.max(arr[0], maximumArray(arr.slice(1)));
}
console.log(maximumArray([1, 2, 3, 14, 5]));

// Task 5
function reverseString(str){
    if(str === ''){
        return '';
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("javascript")); // Output: "tpircsavaj"

// Task 6
function isPalindrome(str){
    if(str.length === 0 || str.length === 1){
        return true;
    }
    if(str[0] !== str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1, str.length-1));
}
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("madam")); // Output: true

// Task 7
function binarySearch(arr,num){
    if(arr.length === 0){
        return false;
    }
    let mid = Math.floor(arr.length/2);
    if(arr[mid] === num){
        return true;
    }
    if(arr[mid] < num){
        return binarySearch(arr.slice(mid+1),num);
    }
    return binarySearch(arr.slice(0,mid),num);
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)); // Output: true

// Task 8
function occurences(arr,num){
    if(arr.length === 0){
        return 0;
    }
    let count = 0;
    if(arr[0] === num){
        count++;
    }
    return count + occurences(arr.slice(1),num);
}
console.log(occurences([1,5,3,4,5,6,7,8,9,10], 5)); // Output: 1