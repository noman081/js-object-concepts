// 1. object literal
// const student = { name: 'Shakib', age: 18 }
// console.log(student);
//2. constuctor
const student = new Object();
// console.log(student);
//3. Class
class Human {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}
const humans = new Human('Shakib', 1);
console.log(humans);
//4. Function

function NewHuman(name) {
    this.name = name;
}
const newHumans = new NewHuman('Shakib');
console.log(newHumans);