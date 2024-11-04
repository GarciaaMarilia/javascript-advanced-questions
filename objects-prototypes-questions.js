// Creation and Manipulation of Objects

function Person(name, age, address) {
 this.name = name;
 this.age = age;
 this.address = address;
}

Person.prototype.introduce = function () {
 return `Hi, I am ${this.name}, I am ${this.age} years old and I live in ${this.address}`;
};

const person1 = new Person("Marília", 27, "Paris");
const person2 = new Person("Carlos", 30, "Lyon");

console.log(person1.introduce(), person2.introduce());

// Prototype and Inheritance

function Animal(name, sound) {
 this.name = name;
 this.sound = sound;
}

Animal.prototype.makeSound = function () {
 console.log(`${this.name} makes the sound ${this.sound}`);
};

function Dog(name, sound, breed) {
 Animal.call(this, name, sound);
 this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Bolt", "Woof Woof", "Golden Retriever");
dog.makeSound(); // "Bolt makes the sound: Woof Woof"
console.log(dog.breed); // "Golden Retriever"

// Prototype Manipulation

function Car(speed) {
 this.speed = speed;
}

Car.prototype.accelerate = function () {
 this.speed += 10;
 console.log(`Current speed: ${this.speed}`);
};

Car.prototype.brake = function () {
 this.speed -= 5;
 console.log(`Current speed: ${this.speed}`);
};

const car = new Car(20);

car.accelerate();
car.accelerate();
car.brake();

// Prototype Chain

function Person(name) {
 this.name = name;
}

Person.prototype.greet = function () {
 return `Hello, my name is ${this.name}`;
};

function Student(name, course) {
 Person.call(this, name);
 this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
 return `Studying ${this.course}`;
};

const student1 = new Student("Marília", "IT");

console.log(student1.greet());
console.log(student1.study());

// Creating a Mixin with Prototypes
// A mixin is a design pattern in programming that allows sharing functionalities between different classes or objects, without using inheritance.
// It is particularly useful when we want to add functionalities to several classes or objects that do not share a direct hierarchy.
// In JavaScript, mixins are often implemented using objects or functions that add methods or properties to a prototype or an instance.
const Fly = {
 // Mixin
 fly: function () {
  console.log("I'm flying!");
 },
};

function Bird(name) {
 this.name = name;
}

function Airplane(model) {
 this.model = model;
}

Object.assign(Bird.prototype, Fly);
Object.assign(Airplane.prototype, Fly);

const bird = new Bird("Parrot");
const airplane = new Airplane("Boeing 747");

bird.fly(); // "I'm flying!"
airplane.fly(); // "I'm flying!"
