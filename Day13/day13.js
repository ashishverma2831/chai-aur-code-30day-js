// Day 13 : Modules

// Task 1
import add from './add.js';
console.log(add(1, 2));

// Task 2
import person from './person.js';
console.log(person.greet());

// Task 3
import { subtract, multiply, division } from './math.js';
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(division(1, 2));

// Task 4
// done in Task 1

// Task 5
import * as constants from './constants.js';
console.log(constants.PI);
console.log(constants.E);
console.log(constants.square(2));
console.log(constants.cube(2));

// Task 6
import _ from 'lodash';
const numbers = [10, 5, 3, 7];
const sortedNumbers = _.sortBy(numbers);
console.log(sortedNumbers); // Output: [3, 5, 7, 10]
const chunkedNumbers = _.chunk(numbers, 2);
console.log(chunkedNumbers); // Output: [[10, 5], [3, 7]]

// Task 7
import axios from 'axios';
axios.get('https://api.publicapis.org/entries')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
    
// Task 8 (optional)
import randomColor from "randomcolor";
const bodyElement = document.getElementById("body");
const buttonElement = document.getElementById("button");
function changeBodyColor() {
  const color = randomColor();
  bodyElement.style.backgroundColor = color;
}
buttonElement.addEventListener("click", changeBodyColor);
// failed to do task 8