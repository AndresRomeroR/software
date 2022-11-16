//arrays destructuring

let fruits = ['Appple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//objets destructuring

let user = {username: 'Andres', age: 24};
let { username, age } = user;
console.log(username, user.age);

//spread operator

let person = { name: 'Ricardo', age: 24};
let country = 'COL';

let data = { id: 1, ...person, country };
console.log(data);

//rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 4, 6, 8);