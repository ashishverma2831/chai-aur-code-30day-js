// Day 9 : DOM Manipulation

// const { JSDOM } = require('jsdom');   
// const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
// global.document = dom.window.document;

// document.getElementById('a').textContent = "Hello World";

// Task 1
const text1 = document.getElementById('a').textContent = "Hello World 1";

// Task 2
const text2 = document.getElementsByClassName('b');
text2[0].textContent = "Hello World 2";

// Task 3
const text3 = document.createElement('div');
text3.textContent = "Hello World 3";
document.body.appendChild(text3);

// Task 4
const text4 = document.createElement('li');
text4.textContent = "Hello World 4";
document.getElementById('list').appendChild(text4);

// Task 5
const text5 = document.getElementById('c');
document.body.removeChild(text5);

// Task 6
const text6 = document.getElementById('d');
document.body.lastChild.remove(text6);