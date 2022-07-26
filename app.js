const h1 = document.getElementById('main-title');

console.log('Before ', h1.textContent);

h1.textContent = 'Some new Title';
h1.style.color = "white";
h1.style.backgroundColor = "green";

console.log('After ', h1.textContent);

console.dir(h1);