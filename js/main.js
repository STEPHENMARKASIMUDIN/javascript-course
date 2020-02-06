//main premitive data types
//string numbers boolean null undefined
let name = '';
let number = 1;
let isTrue = false;
let gf = null;
let future = undefined;
let z;
const todoList = [
    {
        id: 1,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Coding',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Testing',
        isCompleted: true
    }
];
//high order array methods
todoList.forEach((todo) => {
    //console.log(todo);
});
const todoText = todoList.map((todo) => {
    return todo.text;
});
const todoCompleted = todoList.filter((todo) => {
    return todo.isCompleted === true;
}).map((todo) => {
    return todo.text;
});
//object oriented
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}
//instantiate object
const person1 = new Person('Stephen', 'Mark', '09/20/1993');

const ul = document.querySelector('.my-list');
ul.firstElementChild.textContent = 'Stephen Asi';
ul.lastElementChild.innerHTML = 'Stephen M A';
ul.children[1].innerHTML = 'Stephen M';
ul.children[2].innerHTML = '<strong>Asi Steph</strong>';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('.my-list').style.background = '#333';
//     document.querySelector('.my-form').classList.add('bg-dark');

// });
const myForm = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const users = document.querySelector('.users');
const msg = document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (!nameInput.value || !emailInput.value) {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields!';
        setTimeout(() => msg.remove(), 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        users.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
    // myList.firstElementChild.textContent = nameInput.value;
    // myList.children[1].innerHTML = emailInput.value;
    // setTimeout(() => myList.remove(), 2000);
}
