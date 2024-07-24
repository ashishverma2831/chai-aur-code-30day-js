// Day 10 : Event Handling

// Task 1
const changeTextButton = document.getElementById('change-text-button');
const text = document.getElementById('text');
changeTextButton.addEventListener('click',()=>{
    text.innerText = 'I am changed';
})

// Task 2
const changeBackgroundButton = document.getElementById('change-visibility-button');
const image = document.getElementById('image');
changeBackgroundButton.addEventListener('dblclick',()=>{
    if(image.style.display === 'none'){
        image.style.display = 'block';
    }
    else{
        image.style.display = 'none';
    }
})

// Task 3
const changeColor = document.getElementById('change-color');
changeColor.addEventListener('mouseover',()=>{
    changeColor.style.backgroundColor = 'black';
})

// Task 4
changeColor.addEventListener('mouseout',()=>{
    changeColor.style.backgroundColor = 'red';
})

// Task 5
const inputText = document.getElementById('input-text');
inputText.addEventListener('keydown',(e)=>{
    // console.log(inputText.value);
    console.log(e.code);
})

// Task 6
inputText.addEventListener('keyup',(e)=>{
    console.log(inputText.value);
})

// Task 7
const submitButton = document.getElementById('submit-button');
const form = document.getElementById('form');
submitButton.addEventListener('click',(e)=>{
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    console.log(email.value,password.value);
    form.reset();
})

// Task 8
const select = document.getElementById('select');
select.addEventListener('change',()=>{
    console.log(select.value);
})

// Task 9
const top4List = document.querySelectorAll('#top4list li');
console.log(top4List);
top4List.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.innerText);
    })
})

// Task 10
const list = document.getElementById('list');
const items = list.querySelectorAll('li');
items.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.innerText);
    })
})