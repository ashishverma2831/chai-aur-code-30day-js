// Day 20 : LocalStorage and SessionStorage

// Task 1
localStorage.setItem("name", "Ashish Verma - LocalStorage");
console.log("Name:", localStorage.getItem("name"));

// Task 2
const person = {
    name: "Ashish Verma",
    age: 25,
    city: "Bangalore"
};
localStorage.setItem("person", JSON.stringify(person));
console.log("Person:", JSON.parse(localStorage.getItem("person")));


// Task 3
document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector('#localStorageForm');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        displayLocalStorageData();
    });

    const displayLocalStorageData = () => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name && email) {
            document.querySelector('#localStorageData').textContent = `Name: ${name}, Email: ${email}`;
        }
    };

    displayLocalStorageData();
})


// Task 4
localStorage.setItem("itemToRemove", "Item to remove");
console.log("Before removal:", localStorage.getItem("itemToRemove"));
localStorage.removeItem("itemToRemove");
console.log("After removal:", localStorage.getItem("itemToRemove"));

// Task 5
sessionStorage.setItem("name", "Ashish Verma - Session");
console.log("Name:", sessionStorage.getItem("name"));

// Task 6
const mySessionObject = { username: 'Jane Doe', loggedIn: true };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject);

// Task 7
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#sessionStorageForm');
    const sessionNameInput = document.querySelector('#sessionName');
    const sessionEmailInput = document.querySelector('#sessionEmail');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = sessionNameInput.value;
        const email = sessionEmailInput.value;
        sessionStorage.setItem('sessionName', name);
        sessionStorage.setItem('sessionEmail', email);
        displaySessionStorageData();
    });

    const displaySessionStorageData = () => {
        const name = sessionStorage.getItem('sessionName');
        const email = sessionStorage.getItem('sessionEmail');
        if (name && email) {
            document.querySelector('#sessionStorageData').textContent = `Name: ${name}, Email: ${email}`;
        }
    };

    displaySessionStorageData();
});

// Task 8
sessionStorage.setItem("itemToRemove", "Item to remove");
console.log("Before removal:", sessionStorage.getItem("itemToRemove"));
sessionStorage.removeItem("itemToRemove");
console.log("After removal:", sessionStorage.getItem("itemToRemove"));

// Task 9
const localandSessionStorage = (key,value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    console.log("LocalStorage:", localStorage.getItem(key));
    console.log("SessionStorage:", sessionStorage.getItem(key));
}
localandSessionStorage("Both key", "Both values");

// Task 10
const clearBothStorages = () => {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage cleared:', localStorage.length === 0);
    console.log('SessionStorage cleared:', sessionStorage.length === 0);
};

clearBothStorages();







// Local storage
// Stores data in key-value pairs in the browser, and it doesn't expire. This means that data is accessible even after the user closes and reopens their browser or tab. Local storage can store up to 10 MB of data per domain, but it's not secure because it's stored as plain text.
// Session storage
// Stores data for a single session, and it's cleared when the browser tab is closed. Session storage can store up to 5 MB of data per domain
