// const h1 = document.getElementById('main-title');

// console.log('Before ', h1.textContent);

// h1.textContent = 'Some new Title';
// h1.style.color = "white";
// h1.style.backgroundColor = "green";

// console.log('After ', h1.textContent);

// console.dir(h1);

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
console.log(firstLi); //breaks the DOM Traversal technique

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }
    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});



