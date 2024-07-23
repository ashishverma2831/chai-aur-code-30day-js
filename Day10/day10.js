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