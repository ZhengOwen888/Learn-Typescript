// Classes
class PersonInfo{
    private name: string;  // only this class can access it
    protected cell: number // only this class and sub classes can access it
    constructor(name: string, cell: number) {
        this.name = name;
        this.cell = cell;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        if (name.length < 5) return
        this.name = name;

    }
}

class EmployeeInfo extends PersonInfo {
    callMe(): void {
        console.log(this.cell);
    }
}
const p1 = new PersonInfo("Sarah", 1234567890);

// Abstract class - class that cannot be instantiated directly but intead inherited by other classes
abstract class Animal {
    abstract makeSound(duration: number): void; // The class that inherits this class must instantiate this method
    move(duration: number) {
        console.log("Moving along...");
        this.makeSound(duration)
    }
}

class Dog extends Animal {
    makeSound(duration: number): void {
        console.log("Woof woof");
    }
}

class Cat extends Animal {
    makeSound(duration: number): void {
        console.log("Meow meow");
    }
}

const dog = new Dog()
dog.move(10)

// Classes and interfaces
interface Organism {
    speak(): void;
}

class Fish implements Organism {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name,
        this.color = color
    }

    speak() {
        console.log(`I am ${this.name} and I am ${this.color}`);
    }
    test() {
        return 1;
    }
}

class Turtle implements Organism {
    speak() {
        console.log("Hiss")
    }
}
// We are looking at the classes though the lense of the Organism interface
const fish: Organism = new Fish("Goldy", "orange");
const turtle: Organism = new Turtle();
const organisms: Organism[] = [fish, turtle];

function makeSound(organism: Organism) {
    organism.speak();
}

// Static Attributes and methods
class Rabbit {
    static instanceCount: number = 0;
    name: string;

    constructor(name:string) {
        Rabbit.instanceCount++;
        this.name = name;
    }

    static decreaseCount() {
        this.instanceCount--;
    }
}

const rabbit1 = new Rabbit("Jim");
console.log(Rabbit.instanceCount) // 1

const rabbit2 = new Rabbit("Joey");
console.log(Rabbit.instanceCount) // 2

// Generics - a generic placeholder that allows you to use any data type after specifying in declaration
class DataStore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

function getValue<K, V>(key: K, value1: V, value2: V): V {
    if (key) {
        return value1;
    }
    return value2;
}

const n1: number = 1;
const n2: number = 2;
getValue<string, number>("hello", n1, n2);