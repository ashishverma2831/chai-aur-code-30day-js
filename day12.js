// Day 12 : Error Handling

// Task 1
const errorFucntion = () => {
    try {
        throw new Error('This is an error');
    } catch (error) {
        console.log("Error caught : "+error.message);
    }
}
errorFucntion();

// Task 2
const errorFunction2 = (num1,num2) => {
    try {
        if(num2 === 0)
            throw new Error('Division by zero');
        return num1/num2;
    } catch (error) {
        console.log("Error caught : "+error.message);      
    }
}
errorFunction2(10,0);
console.log(errorFunction2(10,2));

// Task 3
try {
    console.log('Inside try block');
    throw new Error('This is an error');
} catch (error) {
    console.log("Error caught : "+error.message);
} finally{
    console.log('Finally block executed');
}

// Task 4
class validationFailedError extends Error{
    constructor(message){
        super(message);
        this.name = 'ValidationFailedError';
    }
}

const validateUserInput = (input) => {
    try {
        if(input.trim() === ''){
            throw new validationFailedError('Input is empty');
        }
        return input;
    } catch (error) {
        if(error.name === 'ValidationFailedError'){
            console.log("Validation failed : "+error.message);
        }else{
            console.log("Undefined error caught : "+error.message);
        }
        return false;
    }
}

const validInput = validateUserInput("Hello");
console.log(validInput); // Output: Hello

const emptyInput = validateUserInput("");
console.log(emptyInput); // Output: Validation error: Input cannot be empty! (or null)


// Task 5 same in Task 4

// Task 6
const promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('This is a promise error, rejected after 5 seconds');
    },5000)
})

const asyncFunction = async ()=>{
    try {
        const response = await promise6;
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncFunction();

// Task 7
const fetchData2 = async ()=>{
    try {
        const response = await fetch("https://example.com/invalid-url"); // Replace with a valid URL for testing resolution
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}
fetchData2();

// Task 8
fetch("https://api.publicapis.org/entries")
.catch(error => console.error("Fetch error:", error.message));

// Task 9 same as Task 7