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
    console.log(todo);
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
