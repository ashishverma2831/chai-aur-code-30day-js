// Day 9 : DOM Manipulation

// Task 1
// document.getElementById('a').textContent = "Hello World";
// document.querySelectorAll('#a').textContent = "Hello World";

// Task 2
// const text2 = document.getElementsByClassName('b');
// text2.textContent = "Hello World 2";


// if(typeof document !== undefined){
//     console.log("Hello World");
// }
// else{
//     console.log("DOM is not loaded yet");
// }

const { JSDOM } = require('jsdom');   
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;

document.getElementById('a').textContent = "Hello World";