// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".Modify the Person constructor to throw an error if the age is not a positive number



function Person(name, age){
    if (age <= 0) {
        throw new Error("Age must be a positive number");
    }
    this.name = name
    this.age = age

    this.greet = function(){
        return `Hello, my name is ${this.name}!`;
    }
}
const person = new Person("Prerna", 20);
console.log(person.greet());