const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const open = document.getElementById('btn');
const close = document.getElementById('btn-close');

open.addEventListener('click', () => {
    // alert('Hello World');
    b.style.display = 'block';
    a.style.display = 'none';
});

close.addEventListener('click', () => {
    // alert('Hello World');
    b.style.display = 'none';
    a.style.display = 'block';
});