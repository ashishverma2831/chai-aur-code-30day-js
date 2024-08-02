// Day 19 : Regular Expressions

// Task 1
const matchJavaScript = (str) => {
    let regex = /javaScript/gi;
    return str.match(regex);
}
console.log("Match 'JavaScript':", matchJavaScript("I love JavaScript. JavaScript is great!"));

// Task 2
const matchDigits = (str) =>{
    let regex = /\d/g;
    return str.match(regex);
}
console.log("Match digits:", matchDigits("I have 2 cats and 3 dogs."));

// Task 3
const isFirstCharOfWordUpperCase = (str) => {
    let regex = /\b[A-Z]/g;
    return str.match(regex);
}
console.log("First character of each word is uppercase:", isFirstCharOfWordUpperCase("I Love javaScript"));

// Task 4
function matchDigitSequences(str) {
    let regex = /\d+/g;
    return str.match(regex);
}
console.log("Match Digit Sequences:", matchDigitSequences("There are 123 apples and 456 oranges."));

// Task 5
function capturePhoneNumberComponents(phoneNumber) {
    let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let match = phoneNumber.match(regex);
    return match ? { areaCode: match[1], centralOfficeCode: match[2], lineNumber: match[3] } : null;
}
console.log("Capture Phone Number Components:", capturePhoneNumberComponents("(123) 456-7890"));

// Task 6
function captureEmailComponents(email) {
    let regex = /(\w+)@(\w+\.\w+)/;
    let match = email.match(regex);
    return match ? { username: match[1], domain: match[2] } : null;
}
console.log("Capture Email Components:", captureEmailComponents("example@test.com"));

// Task 7
function matchWordAtStart(str, word) {
    // let regex = new RegExp(`${word}\\b`);
    let regex = new RegExp(`^${word}\\b`);
    return str.match(regex);
}
console.log("Match Word at Start:", matchWordAtStart("Hello world", "Hello"));

// Task 8
function matchWordAtEnd(str, word) {
    let regex = new RegExp(`\\b${word}$`);
    return str.match(regex);
}
console.log("Match Word at End:", matchWordAtEnd("Hello world", "world"));

// Task 9: Validate a simple password
function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}
console.log("Validate Password:", validatePassword("Password123!"));


// Task 10: Validate a URL
function validateURL(url) {
    let regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/;
    return regex.test(url);
}
console.log("Validate URL:", validateURL("https://www.example.com"));
